"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMovie = void 0;
const joi_1 = __importDefault(require("joi"));
const createMovie = joi_1.default.object({
    title: joi_1.default.string().label('Title').required(),
    imdbScore: joi_1.default.number().label('ImdbScore').required(),
    directorId: joi_1.default.number().label('DirectorId').required(),
    actors: joi_1.default.any().label('Actor').required(),
    genreId: joi_1.default.number().label('GenreId').required(),
    description: joi_1.default.string().label('Description').optional(),
    thumbnail: joi_1.default.string().label('Thumbnail').optional(),
    embedVideoUrl: joi_1.default.string().label('EmbedVideoUrl').optional(),
    avgRatings: joi_1.default.number().label('avgRatings').required(),
    totalRatings: joi_1.default.number().label('TotalRating').required(),
    duration: joi_1.default.string().label('Duration').required(),
    releasedAt: joi_1.default.date().label('ReleasesAt').required()
});
exports.createMovie = createMovie;
