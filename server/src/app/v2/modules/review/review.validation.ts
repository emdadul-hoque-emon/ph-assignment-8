import z from "zod";

export const createReviewSchema = z.object({
  tourId: z.string().optional(),
  guideId: z.string().optional(),
  rating: z.number().int().min(1).max(5).default(5),
  comment: z.string().optional(),
});

export const updateReviewSchema = z.object({
  rating: z.number().int().min(1).max(5).optional(),
  comment: z.string().optional(),
});

export type CreateReviewInput = z.infer<typeof createReviewSchema>;
export type UpdateReviewInput = z.infer<typeof updateReviewSchema>;
