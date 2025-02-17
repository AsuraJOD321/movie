"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guard = void 0;
const config_1 = require("../config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Guard {
    static grantAccess(req, res, next) {
        var _a;
        const accessToken = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (!accessToken)
            return res.status(500).json({
                success: false,
                message: "provide n access token"
            });
        const decodedToken = jsonwebtoken_1.default.verify(accessToken, config_1.jwtSecret);
        if (!decodedToken)
            return res.status(500).json({
                success: false,
                message: "provide n access token"
            });
        req.user = decodedToken;
        next();
    }
    static grantRole(role) {
        return (req, res, next) => {
            if (req.user.role === role) {
                next();
            }
            else {
                return res.status(400).json({
                    message: "you are not authorized to perform this task"
                });
            }
        };
    }
}
exports.Guard = Guard;
