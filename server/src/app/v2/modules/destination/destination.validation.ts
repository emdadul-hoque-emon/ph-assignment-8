import z from "zod";

export const createDestinationSchema = z.object({
  name: z.string({
    error: "Destination name is required",
  }),
  description: z.string().optional(),
  country: z.string({
    error: "Country is required",
  }),
  city: z.string({
    error: "City is required",
  }),
});

export type CreateDestinationInput = z.infer<typeof createDestinationSchema>;
