import { IUser } from "./user.interface";

export interface IGuide<T = null> {
  _id: string;
  id: string;
  // Professional profile
  expertise: string[]; // City tours, Food tours
  specialties: string[];
  aboutMe: string;
  experienceYears: number;
  certifications?: string[];
  languages: string[];
  city: string;
  country: string;

  // Availability
  availability?: {
    day: string; // Monday
    slots: string[]; // ["09:00", "14:00"]
  }[];

  // Pricing
  hourlyRate: number;
  currency: string; // ISO-4217

  // Verification
  verified: boolean;
  verifiedAt?: Date;

  // Bank / payout
  bankInfo?: {
    bankCode: string;
    accountName: string;
    accountNumber: string;
    country: string; // ISO-3166
  };

  averageRating: number;
  rating: number;
  totalTrips: number;
  totalReviews: number;
  totalEarnings: number;

  profile: T;

  // System
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
  deletedAt?: Date;
}
