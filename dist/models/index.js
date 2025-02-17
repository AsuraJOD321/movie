"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const genre_1 = __importDefault(require("../models/genre"));
const director_1 = __importDefault(require("../models/director"));
const movies_1 = __importDefault(require("./movies"));
const user_1 = __importDefault(require("./user"));
const Model = {
    Genre: genre_1.default, Director: director_1.default, Movie: movies_1.default, User: user_1.default
};
exports.default = Model;
