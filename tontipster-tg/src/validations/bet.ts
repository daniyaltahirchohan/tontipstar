import Joi from 'joi'

const betSchema ={
    createBet: Joi.object({
        creatorId: Joi.string().required(),
        prediction: Joi.string().required(),
        description: Joi.string().allow('', null),
        amount: Joi.number().required(),
        odds: Joi.number().required(),
        expiryDate: Joi.date().required(),
        fixtureId: Joi.string().required(),
      }),
}


export default betSchema;