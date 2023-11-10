import Joi from "joi";
import validation from "./validation";

const editProfileSchema = Joi.object({
  first: Joi.string().min(2).max(256).required().messages({
    "string.empty": "First name is required",
    "string.min": "First name must be at least 2 characters long",
  }),
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
  url: Joi.string().min(14).required(),
  alt: Joi.string().min(2).max(256).required(),
  state: Joi.string().min(2).max(256).allow(""),
  country: Joi.string().min(2).max(256).required().messages({
    "string.empty": "Address is required",
    "string.min": "Address must be at least 2 characters long",
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
  zip: Joi.number().min(2).max(256).required().messages({
    "number.empty": "Zip is required",
    "number.min": "Zip must be at least 2 characters long",
  }),
  // isBusiness: Joi.boolean().required(),
});

const validateEditProfile = (inputToCheck) =>
  validation(editProfileSchema, inputToCheck);

export { validateEditProfile };
