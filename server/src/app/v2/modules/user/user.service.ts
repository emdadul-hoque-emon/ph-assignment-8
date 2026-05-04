import {
  Gender,
  Prisma,
  TravelerProfile,
  User,
  UserRole,
} from "../../../../../prisma/generated/client";
import prisma from "../../../config/db";
import AppError from "../../../helpers/appError";
import { paginationHelper } from "../../../helpers/paginationHelper";
import bcrypt from "bcryptjs";
import { uploadFileToCloudinary } from "../../../utils/upload-files";
import { UpdateUserSchema } from "./user.validation";

const cleanObject = (obj: Record<string, any>) => {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([_, value]) =>
        value !== undefined &&
        value !== null &&
        value !== "" &&
        !(Array.isArray(value) && value.length === 0),
    ),
  );
};

const getAllUserFromDB = async (options: any, filters: any) => {
  const { limit, skip, page, sortBy, sortOrder } =
    paginationHelper.calculatePagination(options);

  const {
    searchTerm,
    role,
    topGuides,
    specialties,
    interests,
    languages,
    gender,
    ...filtersData
  } = filters;

  const andConditions: Prisma.UserWhereInput[] = [];
  if (searchTerm) {
    andConditions.push({
      OR: [
        {
          name: {
            contains: filters.searchTerm,
            mode: "insensitive",
          },
        },
        {
          email: {
            contains: filters.searchTerm,
            mode: "insensitive",
          },
        },
      ],
    });
  }

  if (topGuides) {
    andConditions.push({
      role: UserRole.GUIDE,
      guideProfile: {
        rating: {
          gte: 4.5,
        },
      },
    });
  }

  if (role) {
    andConditions.push({
      role: role.toUpperCase(),
    });
  }

  if (specialties) {
    andConditions.push({
      guideProfile: {
        specialties: {
          has: specialties,
        },
      },
    });
  }
  if (languages) {
    if (role.toUpperCase() === UserRole.GUIDE) {
      if (Array.isArray(languages)) {
        andConditions.push({
          guideProfile: {
            languages: {
              hasSome: languages,
            },
          },
        });
      } else {
        andConditions.push({
          guideProfile: {
            languages: {
              has: languages,
            },
          },
        });
      }
    } else if (role.toUpperCase() === UserRole.TRAVELER) {
      if (Array.isArray(languages)) {
        andConditions.push({
          travelerProfile: {
            languages: {
              hasSome: languages,
            },
          },
        });
      } else {
        andConditions.push({
          travelerProfile: {
            languages: {
              has: languages,
            },
          },
        });
      }
    }
  }

  if (gender) {
    if (role.toUpperCase() === UserRole.GUIDE) {
      andConditions.push({
        guideProfile: {
          gender: {
            equals: gender.toUpperCase(),
          },
        },
      });
    } else if (role.toUpperCase() === UserRole.TRAVELER) {
      andConditions.push({
        travelerProfile: {
          gender: {
            equals: gender.toUpperCase(),
          },
        },
      });
    }
  }

  if (interests) {
    andConditions.push({
      travelerProfile: {
        interests: {
          has: interests,
        },
      },
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      AND: Object.keys(filtersData).map((key) => ({
        [key]: {
          equals: filtersData[key],
          mode: "insensitive",
        },
      })),
    });
  }

  const users = await prisma.user.findMany({
    where: {
      AND: andConditions,
    },
    include: {
      guideProfile:
        topGuides || (role || "").toUpperCase() === UserRole.GUIDE
          ? true
          : false,
      travelerProfile:
        (role || "").toUpperCase() === UserRole.TRAVELER ? true : false,
    },
    take: limit,
    skip: skip,
    orderBy: {
      [sortBy]: sortOrder,
    },
  });

  const total = await prisma.user.count({
    where: {
      AND: andConditions,
    },
  });

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: users.map(({ guideProfile, travelerProfile, ...user }) => ({
      ...user,
      profile: guideProfile || travelerProfile,
    })),
  };
};

const getSingleUserFromDB = async (id: string) => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      guideProfile: true,
      travelerProfile: true,
    },
    omit: {
      password: true,
    },
  });

  if (!result) {
    throw new AppError(404, "User not found");
  }

  const { guideProfile, travelerProfile, ...userData } = result;
  let profileInfo = null;
  if (userData.role === UserRole.GUIDE) {
    profileInfo = guideProfile;
  }
  if (userData.role === UserRole.TRAVELER) {
    profileInfo = travelerProfile;
  }
  return { profile: profileInfo, ...userData };
};

const createUserInDB = async (payload: any) => {
  const { name, email, password, role, country, city, avatar, bio, phone } =
    payload;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new AppError(400, "Email already in use");
  }

  const userData: any = {
    name,
    email,
    password: await bcrypt.hash(password, 10),
    role: role ? role.toUpperCase() : UserRole.TRAVELER,
    country: country || null,
    city: city || null,
    avatar: avatar || null,
    bio: bio || null,
    phone: phone || null,
  };

  // Traveler Profile
  if (role === UserRole.TRAVELER) {
    userData.travelerProfile = {
      create: {
        gender: payload.gender as Gender,
        bloodGroup: payload.bloodGroup,
        languages: payload.languages || [],
        interests: payload.interests || [],
        dateOfBirth: payload.dateOfBirth,
        aboutMe: payload.bio,
      },
    };
  }

  // Guide Profile
  if (role === UserRole.GUIDE) {
    userData.guideProfile = {
      create: {
        gender: payload.gender as Gender,
        bloodGroup: payload.bloodGroup,
        languages: payload.languages || [],
        specialties: payload.specialties || [],
        dateOfBirth: payload.dateOfBirth,
        bio: payload.bio,
      },
    };
  }

  // Create user
  const result = await prisma.user.create({
    data: userData,
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      city: true,
      country: true,
      avatar: true,
      createdAt: true,
    },
  });

  return result;
};

const updateUserInDB = async (
  id: string,
  payload: UpdateUserSchema,
  files: { [fieldName: string]: Express.Multer.File[] },
) => {
  let avatarUrl: string | undefined;

  const existingUser = await prisma.user.findUnique({
    where: { id },
    select: { role: true },
  });

  if (files?.avatar?.length) {
    const upload = await uploadFileToCloudinary(files.avatar[0], "avatar");
    if (upload?.url) {
      avatarUrl = upload.url;
    }
  }

  const userData = cleanObject({
    name: payload.name,
    country: payload.country,
    city: payload.city,
    bio: payload.bio,
    avatar: avatarUrl,
  });

  const guideData = cleanObject({
    gender: payload.gender,
    bloodGroup: payload.bloodGroup,
    languages: payload.languages,
    specialties: payload.specialties,
    dateOfBirth: payload.dateOfBirth,
  });

  const travelerData = cleanObject({
    gender: payload.gender,
    bloodGroup: payload.bloodGroup,
    interests: payload.interests,
    dateOfBirth: payload.dateOfBirth,
    // languages: payload.languages,
  });

  const result = await prisma.user.update({
    where: { id },
    data: {
      ...userData,

      ...(existingUser?.role === UserRole.GUIDE &&
        Object.keys(guideData).length > 0 && {
          guideProfile: {
            update: guideData,
          },
        }),

      ...(existingUser?.role === UserRole.TRAVELER &&
        Object.keys(travelerData).length > 0 && {
          travelerProfile: {
            update: travelerData,
          },
        }),
    },

    include: {
      guideProfile: true,
      travelerProfile: true,
    },
  });

  return result;
};

const hardDeleteUser = async (id: string) => {
  const data = await prisma.user.delete({
    where: {
      id,
    },
  });
  return data;
};

const softDeleteUser = async (id: string) => {
  const data = await prisma.user.update({
    where: {
      id,
    },
    data: {
      isDeleted: true,
    },
  });
  return data;
};

const addEmergencyContact = async (
  userId: string,
  { user, id, ...payload }: Prisma.EmergencyContactCreateInput,
) => {
  const data = await prisma.emergencyContact.create({
    data: {
      ...payload,
      userId,
    },
  });
  return data;
};

const getEmergencyContact = async (id: string) => {
  const data = await prisma.emergencyContact.findMany({
    where: {
      userId: id,
    },
  });
  return data;
};

const updateEmergencyContact = async (
  id: string,
  payload: Prisma.EmergencyContactUpdateInput,
) => {
  const data = await prisma.emergencyContact.update({
    where: {
      id: payload.id as string,
    },
    data: {
      ...payload,
    },
  });
  return data;
};

const deleteEmergencyContact = async (id: string) => {
  const data = await prisma.emergencyContact.delete({
    where: {
      id,
    },
  });
  return data;
};

export const UserService = {
  getAllUserFromDB,
  getSingleUserFromDB,
  createUserInDB,
  updateUserInDB,
  hardDeleteUser,
  softDeleteUser,
  addEmergencyContact,
  getEmergencyContact,
  updateEmergencyContact,
  deleteEmergencyContact,
};
