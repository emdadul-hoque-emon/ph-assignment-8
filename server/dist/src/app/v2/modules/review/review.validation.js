"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateReviewSchema = exports.createReviewSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.createReviewSchema = zod_1.default.object({
    tourId: zod_1.default.string().optional(),
    guideId: zod_1.default.string().optional(),
    rating: zod_1.default.number().int().min(1).max(5).default(5),
    comment: zod_1.default.string().optional(),
});
exports.updateReviewSchema = zod_1.default.object({
    rating: zod_1.default.number().int().min(1).max(5).optional(),
    comment: zod_1.default.string().optional(),
});
