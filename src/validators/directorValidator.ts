import joi from "joi";

const createDirector = joi.object({
    name:joi.string().label('Name').required(),
    dob:joi.date().label('date').required(),
    country:joi.string().label('country').required(),

});

export { createDirector };