const Joi = require("joi");
const moment = require("moment");

const Schema = {
  "/vehicle/booking": Joi.object().keys({
    vehicleId: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    startDate: Joi.date().min(moment().format("DD-MM-YYYY")).required(),
    endDate: Joi.date().min(Joi.ref("startDate")).required(),
  }),
};

module.exports = Schema;
