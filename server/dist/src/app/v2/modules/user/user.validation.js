"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const enums_1 = require("../../../../../prisma/generated/enums");
exports.createUserSchema = zod_1.default.object({
    name: zod_1.default.string({
        error: "Name is required",
    }),
    email: zod_1.default
        .string({
        error: "Email is required",
    })
        .email("Invalid email format"),
    password: zod_1.default
        .string({
        error: "Password is required",
    })
        .min(6, "Password must be at least 6 characters long"),
    role: zod_1.default.enum(enums_1.UserRole).optional(),
    country: zod_1.default.string().optional(),
    city: zod_1.default.string().optional(),
});
