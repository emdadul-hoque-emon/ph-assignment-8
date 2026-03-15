"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTripSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.createTripSchema = zod_1.default.object({
    tourId: zod_1.default.string({
        error: "Tour ID is required",
    }),
    guideId: zod_1.default
        .string({
        error: "Guide ID is required",
    })
        .nullable()
        .optional(),
    startDate: zod_1.default.coerce.date({
        error: "Start date is required",
    }),
    endDate: zod_1.default.coerce.date({
        error: "End date is required",
    }),
    price: zod_1.default.number({
        error: "Price is required",
    }),
    maxGuests: zod_1.default.number({
        error: "Max guests is required",
    }),
});
