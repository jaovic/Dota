import Joi from "joi";

const consultaPagBoletoSchema = Joi.object({
  steam32ID: Joi.string().required(),
});

export default consultaPagBoletoSchema;
