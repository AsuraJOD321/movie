"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validator = void 0;
class validator {
    constructor() { }
}
exports.validator = validator;
validator.check = (schema) => {
    return (req, res, next) => {
        const { value, error } = schema.validate(req.body, {
            abortEarly: false,
        });
        if (error)
            throw error;
        next();
    };
};
