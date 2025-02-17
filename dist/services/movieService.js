"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieService = void 0;
const models_1 = __importDefault(require("../models"));
const sequelize_1 = require("sequelize");
class MovieService {
    //get
    findAll(arg) {
        return __awaiter(this, void 0, void 0, function* () {
            let where;
            if (arg.searchQuery) {
                where = {
                    title: {
                        [sequelize_1.Op.like]: `%${arg.searchQuery}%`,
                    },
                };
            }
            if (arg.category) {
                switch (arg.category) {
                    case 'latest':
                        //condition release adter 2024
                        const date = '2024-01-01';
                        where = Object.assign(Object.assign({}, where), { releasedAt: {
                                [sequelize_1.Op.gt]: date
                            } });
                        break;
                    case 'popular':
                        //conditio whose rating is over 8.00
                        const baseImdbScore = '7';
                        where = Object.assign(Object.assign({}, where), { imdbScore: {
                                [sequelize_1.Op.gte]: baseImdbScore
                            } });
                        break;
                    case 'top-rated':
                        const baseRating = '8.0';
                        where = Object.assign(Object.assign({}, where), { avgRating: {
                                [sequelize_1.Op.gte]: baseRating
                            } });
                        break;
                }
            }
            if (arg.genreId) {
                where = Object.assign(Object.assign({}, where), { genreId: parseInt(arg.genreId) });
            }
            const data = yield models_1.default.Movie.findAll();
            offset: arg.offset;
            limit: arg.limit;
            order: [[arg.order, arg.sort]];
            return data;
        });
    }
    //find one by id 
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield models_1.default.Movie.findByPk(id);
            if (!data) {
                throw new Error(`Movie doesnot exist for id:${id}`);
            }
            return data;
        });
    }
    //create
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const movie = yield models_1.default.Movie.create(data);
            return movie;
        });
    }
    //update
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const update = yield models_1.default.Movie.update(data, {
                where: {
                    id: id
                }
            });
            return update[0] === 0 ? false : true;
        });
    }
    //delete
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleted = yield models_1.default.Movie.destroy({
                where: {
                    id: id
                }
            });
            return deleted;
        });
    }
}
exports.MovieService = MovieService;
