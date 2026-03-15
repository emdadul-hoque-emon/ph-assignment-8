"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const db_1 = __importDefault(require("../../../config/db"));
const appError_1 = __importDefault(require("../../../helpers/appError"));
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const getAllUserFromDB = async (options, filters) => {
    const { limit, skip, page, sortBy, sortOrder } = paginationHelper_1.paginationHelper.calculatePagination(options);
    const { searchTerm, role, topGuides, ...filtersData } = filters;
    const andConditions = [];
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
            role: "GUIDE",
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
    const users = await db_1.default.user.findMany({
        where: {
            AND: andConditions,
        },
        include: {
            guideProfile: topGuides || (role || "").toUpperCase() === "GUIDE" ? true : false,
        },
        take: limit,
        skip: skip,
        orderBy: {
            [sortBy]: sortOrder,
        },
    });
    const total = await db_1.default.user.count({
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
        data: users,
    };
};
const getSingleUserFromDB = async (id) => {
    const result = await db_1.default.user.findUnique({
        where: {
            id,
        },
        include: {
            guideProfile: true,
        },
    });
    if (!result) {
        throw new appError_1.default(404, "User not found");
    }
    return result;
};
const createUserInDB = async (payload) => {
    const { name, email, password, role, country, city, avatar, bio, phone } = payload;
    // Check if user already exists
    const existingUser = await db_1.default.user.findUnique({
        where: { email },
    });
    if (existingUser) {
        throw new appError_1.default(400, "Email already in use");
    }
    // Create user
    const result = await db_1.default.user.create({
        data: {
            name,
            email,
            password: await bcryptjs_1.default.hash(password, 10),
            role: role ? role.toUpperCase() : "TRAVELER",
            country: country || "Unknown",
            city: city || "Unknown",
            avatar: avatar || null,
            bio: bio || null,
            phone: phone || null,
        },
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
exports.UserService = {
    getAllUserFromDB,
    getSingleUserFromDB,
    createUserInDB,
};
