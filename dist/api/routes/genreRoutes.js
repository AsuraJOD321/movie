"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../../middlewares");
const validators_1 = require("../../validators");
const guard_1 = require("../../middlewares/guard");
const enum_1 = require("../../enum");
const genreRoutes = (0, express_1.Router)();
genreRoutes.get('/', (0, middlewares_1.exceptionHandler)(controllers_1.GenreController.getGenres));
genreRoutes.post('/', (0, middlewares_1.exceptionHandler)(guard_1.Guard.grantAccess), (0, middlewares_1.exceptionHandler)(guard_1.Guard.grantRole(enum_1.RoleEnum.admin)), (0, middlewares_1.exceptionHandler)(middlewares_1.validator.check(validators_1.createGenre)), (0, middlewares_1.exceptionHandler)(controllers_1.GenreController.createGenres));
genreRoutes.put('/:id', (0, middlewares_1.exceptionHandler)(controllers_1.GenreController.updateGenres));
genreRoutes.delete('/:id', (0, middlewares_1.exceptionHandler)(controllers_1.GenreController.deleteGenres));
exports.default = genreRoutes;
