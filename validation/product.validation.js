import Joi from "joi";

//Produvt Validation are Here
const product = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    discription: Joi.string().required(),
    price: Joi.number().required(),
    forSale: Joi.boolean().required(),
    discount: Joi.number().required(),
    batchNumber: Joi.number().required(),

  }),
};
const id = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

export default {
  product,
  id,
};
