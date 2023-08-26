const { verifyToken } = require("../helper/jwt");
const { User } = require('../models')

const authentication = async (req, res, next)=>{
    const { access_token } = req.headers
    try {
        if(!access_token){
            throw { name : 'noAccessToken'}
        }
        const { id } = verifyToken(access_token)
        const user = await User.findOne({where : { id }})
        if(!user){
            throw { name : 'noUser'}
        }

        req.user = user
        next()
    } catch (err) {
        next(err)
    }
}

module.exports = authentication