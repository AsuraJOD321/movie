"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const genreRoutes_1 = __importDefault(require("./genreRoutes"));
const directorRoutes_1 = __importDefault(require("./directorRoutes"));
const movieRoutes_1 = __importDefault(require("./movieRoutes"));
const authRoutes_1 = __importDefault(require("./authRoutes"));
const router = express_1.default.Router();
router.use(body_parser_1.default.urlencoded({ extended: true }));
router.use(body_parser_1.default.json());
router.use('/genres', genreRoutes_1.default);
router.use('/director', directorRoutes_1.default);
router.use('/movie', movieRoutes_1.default);
router.use('/auth', authRoutes_1.default);
exports.default = router;
