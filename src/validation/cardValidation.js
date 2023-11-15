import Joi from "joi";
import validation from "./validation";
const cardSchema = Joi.object({
  title: Joi.string().min(2).max(256).required().messages({
    "string.empty": "Title is required",
    "string.min": "Title must be at least 2 characters long",
  }),
  subtitle: Joi.string().min(2).max(256).required().messages({
    "string.empty": "Subtitle is required",
    "string.min": "Subtitle must be at least 2 characters long",
  }),
  description: Joi.string().min(2).max(256).required().messages({
    "string.empty": "Description is required",
    "string.min": "Description must be at least 2 characters long",
  }),
  phone: Joi.string()
    .min(9)
    .max(11)
    .required()
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
      "string.pattern.base": "Email must be valid email",
      "string.min": "Email must be at least 5 characters long",
    }),
  web: Joi.string().min(14).allow("").messages({
    "string.min": "Email must be at least 14 characters long",
  }),
  url: Joi.string().min(14).allow(""),
  alt: Joi.string().min(2).max(256).allow(""),
  state: Joi.string().allow(""),
  country: Joi.string().required().messages({
    "string.empty": "Country is required",
  }),
  city: Joi.string().required().messages({
    "string.empty": "City is required",
  }),
  street: Joi.string().required().messages({
    "string.empty": "Street is required",
  }),
  houseNumber: Joi.number().min(1).required().messages({
    "number.empty": "House number is required",
    "number.base": "House number must be a number",
  }),
  zip: Joi.number().allow(""),
});

const validateCard = (inputToCheck) => {
  return validation(cardSchema, inputToCheck);
};
export { validateCard };
