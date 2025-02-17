"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDirector = void 0;
const joi_1 = __importDefault(require("joi"));
const createDirector = joi_1.default.object({
    name: joi_1.default.string().label('Name').required(),
    dob: joi_1.default.date().label('date').required(),
    country: joi_1.default.string().label('country').required(),
});
exports.createDirector = createDirector;
