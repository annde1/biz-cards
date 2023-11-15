import Joi from "joi";
import validation from "./validation";

const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Looks like you forgot your email",
    }),
  password: Joi.string()
    .pattern(
      new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-])[A-Za-z\d!@#$%^&*-]{6,}$/
      )
    )
    .messages({
      "string.pattern.base": "The password is incorrect",
      "string.empty": "Looks like you forgot your password",
    })
    .min(2)
    .max(20)
    .required(),
});

const validateLogin = (inputToCheck) => validation(loginSchema, inputToCheck);

export { validateLogin };
