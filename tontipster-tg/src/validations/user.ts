import Joi from 'joi'


const userSchema ={
    createUser: Joi.object({
        walletAddress: Joi.string().required(),
      }),
}

export default userSchema;