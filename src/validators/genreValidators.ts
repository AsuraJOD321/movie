import joi from "joi";

const createGenre = joi.object({
    name:joi.string().label('Name').required(),
});

export { createGenre };