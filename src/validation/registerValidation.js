import Joi from "joi";
import validation from "./validation";

const registerSchema = Joi.object({
  first: Joi.string()
    .messages({
      "string.empty": "First name is required",
      "string.min": "First name must be at least 2 characters long",
    })
    .min(2)
    .max(256)
    .required(),
  middle: Joi.string().min(2).max(256).allow(""),
  last: Joi.string().min(2).max(256).required().messages({
    "string.empty": "Last name is required",
    "string.min": "Last name must be at least 2 characters long",
  }),
  phone: Joi.string()
    .min(9)
    .max(11)
    .pattern(/^\+?(972|0)(-)?0?(([23489]{1}\d{7})|[5]{1}\d{8})$/)
    .messages({
      "string.empty": "Phone is required",
      "string.pattern.base": "Phone number must be a valid phone number",
    })
    .required(),

  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.pattern.base": "Phone number must be a valid phone number",
      "string.min": "Email must be at least 5 characters long",
    }),
  password: Joi.string()
    .pattern(
      new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-])[A-Za-z\d!@#$%^&*-]{7,}$/
      )
    )
    .messages({
      "string.pattern.base":
        "The password must be at least 6 characters long and can contain a combination of uppercase letters, lowercase letters, digits, and a special character from !@#$%^&*-",
      "string.empty": "Password is required",
      "string.min": "Password must be at least 7 characters long",
    })
    .min(7)
    .max(20)
    .required(),
  url: Joi.string().min(14).allow(""),
  alt: Joi.string().min(2).max(256).allow(""),
  state: Joi.string().min(2).max(256).allow(""),
  country: Joi.string().min(2).max(256).required().messages({
    "string.empty": "Country is required",
    "string.min": "Country must be at least 2 characters long",
  }),
  city: Joi.string().min(2).max(256).required().messages({
    "string.empty": "City is required",
    "string.min": "City must be at least 2 characters long",
  }),
  street: Joi.string().min(2).max(256).required().messages({
    "string.empty": "Street is required",
    "string.min": "Street must be at least 2 characters long",
  }),
  houseNumber: Joi.number().min(2).max(256).required().messages({
    "any.required": "House number is required",
    "number.base": "House number must be a number",
    "number.min": "House number must be at least 2 characters long",
  }),
  zip: Joi.number().min(2).max(256).allow(""),
  isBusiness: Joi.boolean().required(),
});

const validateRegister = (inputToCheck) =>
  validation(registerSchema, inputToCheck);

export { validateRegister };
