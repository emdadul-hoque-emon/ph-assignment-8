"use server";

import { IResponse } from "@/interfaces";
import { ITour } from "@/interfaces/tour.interface";
import { ITrip } from "@/interfaces/trip.interface";
import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zod-validator";
import { z } from "zod";

const tourSchema = z.object({
  title: z.string().min(2, "Title is required"),
  description: z.string().min(3, "Description must be at least 3 characters"),
  category: z.string().min(1, "Category is required"),
  destinationId: z.string().min(1, "Destination is required"),

  maxGroupSize: z.coerce.number().min(1, "Must be at least 1"),
  durationDays: z.coerce.number().min(1, "Must be at least 1"),
  priceFrom: z.coerce.number().min(1, "Price is required"),

  language: z.string().min(1, "Language is required"),

  isActive: z.boolean().optional(),
  isFeatured: z.boolean().optional(),

  image: z
    .instanceof(File)
    .refine((file) => file.size > 0, "Image is required")
    .refine((file) => file.size < 5 * 1024 * 1024, "Max 5MB allowed")
    .refine(
      (file) => file.type.startsWith("image/"),
      "Only image files allowed",
    ),
});

const extractPayload = (formData: FormData) => ({
  title: formData.get("title"),
  description: formData.get("description"),
  category: formData.get("category"),
  destinationId: formData.get("destinationId"),

  maxGroupSize: formData.get("maxGroupSize"),
  durationDays: formData.get("durationDays"),
  priceFrom: formData.get("priceFrom"),

  language: formData.get("language"),
  image: formData.get("image"),

  isActive: formData.get("isActive") === "on",
  isFeatured: formData.get("isFeatured") === "on",
});

export const createTour = async (_: unknown, formData: FormData) => {
  const payload = extractPayload(formData);

  const parsed = tourSchema.safeParse(payload);

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.issues.map((e) => {
        return {
          field: e.path[0] as string,
          message: e.message as string,
        };
      }),
      formData: payload,
      message: "Validation error",
    };
  }

  try {
    const res = await serverFetch.post("/v2/tours", {
      body: formData, // ✅ reuse original FormData
    });

    const data = await res.json();

    if (!data?.success) throw new Error(data?.message);

    return data;
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Failed to create tour",
      formData: payload,
      errors: [],
    };
  }
};
export const updateTour = async (_: unknown, formData: FormData) => {
  const payload = {
    ...extractPayload(formData),
    id: formData.get("tourId"),
  };

  const schema = tourSchema.extend({
    id: z.string().uuid("Invalid ID"),
    image: z.instanceof(File).optional(), // optional for update
  });

  const parsed = schema.safeParse(payload);

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.issues.map((e) => {
        return {
          field: e.path[0] as string,
          message: e.message as string,
        };
      }),
      formData: payload,
      message: "Validation error",
    };
  }

  try {
    const res = await serverFetch.put(`/v2/tours/${parsed.data.id}`, {
      body: formData, // ✅ consistent
    });

    const data = await res.json();

    if (!data?.success) throw new Error(data?.message);

    return data;
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Failed to update tour",
      formData: payload,
      errors: [],
    };
  }
};
export const getTours = async (queryString?: string) => {
  try {
    const res = await serverFetch.get(`/tours?${queryString}`);
    const data: IResponse<ITour[]> = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const getSingleTour = async (id: string) => {
  try {
    const res = await serverFetch.get(`/tours/${id}`);
    const data: IResponse<ITour> = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const getUserTours = async (id: string) => {
  const res = await serverFetch.get(`/guides/tours/${id}`);
  const data: IResponse<{ trip: ITrip<ITour>; _id: string }[]> =
    await res.json();
  return data;
};
