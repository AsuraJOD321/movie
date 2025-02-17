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
exports.DirectorService = void 0;
const models_1 = __importDefault(require("../models"));
class DirectorService {
    //get
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield models_1.default.Director.findAll();
            return data;
        });
    }
    //find one by id 
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield models_1.default.Director.findByPk(id);
            if (!data) {
                throw new Error(`Director doesnot exist for id:${id}`);
            }
            return data;
        });
    }
    //create
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const director = yield models_1.default.Director.create(data);
            return director;
        });
    }
    //update
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const update = yield models_1.default.Director.update(data, {
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
            const deleted = yield models_1.default.Director.destroy({
                where: {
                    id: id
                }
            });
            return deleted;
        });
    }
}
exports.DirectorService = DirectorService;
