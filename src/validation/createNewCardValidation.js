import Joi from "joi";
import validation from "./validation";
const createCardSchema = Joi.object({
  title: Joi.string().min(2).max(256).required(),
  subtitle: Joi.string().min(2).max(256).required(),
  description: Joi.string().min(2).max(256).required(),
  phone: Joi.string().min(9).max(11).required(),
  email: Joi.string().min(5).required(),
  web: Joi.string().min(14).allow(""),
  image: Joi.object({
    url: Joi.string().min(14),
    alt: Joi.string().min(2).max(256).allow(""),
  }).required(),
  address: Joi.object({
    state: Joi.string(),
    country: Joi.string().required(),
    city: Joi.string().required(),
    street: Joi.string().required(),
    houseNumber: Joi.number().min(1).required(),
    zip: Joi.number().allow(""),
  }).required(),
});

const validateCreateCard = (inputToCheck) => {
  validation(createCardSchema, inputToCheck);
};
export { validateCreateCard };
