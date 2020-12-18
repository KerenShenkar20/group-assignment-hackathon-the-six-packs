const Joi = require("joi");

//Validation for adding users
const validUser = (_userObj) => {
    let schema = Joi.object({
        first_name: Joi.string().min(2).max(50).required(),
        last_name: Joi.string().min(2).max(50).required(),
        age: Joi.number().min(1).max(50).required(),
        aubject: Joi.string().required()
    })
    return schema.validate(_userObj);
}
exports.validUser = validUser;
