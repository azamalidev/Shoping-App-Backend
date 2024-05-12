import Joi from "joi";

//Channal Validation are Here
const course = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    discription: Joi.string().required(),
    department: Joi.string().required(),
    createdBy: Joi.string().required(),
  }),
};
const id = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

export default {
  course,
  id,
};
