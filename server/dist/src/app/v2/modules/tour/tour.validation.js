"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTourSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.createTourSchema = zod_1.default.object({
    title: zod_1.default.string({
        error: "Tour title is required",
    }),
    description: zod_1.default.string().optional(),
    destinationId: zod_1.default.string({
        error: "Destination ID is required",
    }),
    category: zod_1.default.string({
        error: "Category is required",
    }),
    priceFrom: zod_1.default.number({
        error: "Price is required",
    }),
});
