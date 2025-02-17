"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidator = exports.signupValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const enum_1 = require("../enum");
exports.signupValidator = joi_1.default.object({
    name: joi_1.default.string().required(),
    email: joi_1.default.string().email().required(),
    role: joi_1.default.string().valid(enum_1.RoleEnum.admin, enum_1.RoleEnum.user).optional(),
    password: joi_1.default.string().required()
});
exports.loginValidator = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required(),
});
