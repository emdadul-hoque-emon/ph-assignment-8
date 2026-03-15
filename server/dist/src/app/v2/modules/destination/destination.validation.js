"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDestinationSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.createDestinationSchema = zod_1.default.object({
    name: zod_1.default.string({
        error: "Destination name is required",
    }),
    description: zod_1.default.string().optional(),
    country: zod_1.default.string({
        error: "Country is required",
    }),
    city: zod_1.default.string({
        error: "City is required",
    }),
});
