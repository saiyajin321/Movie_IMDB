const jwt = require("jsonwebtoken")
const SECRET_KEY = process.env.SECRET_KEY

const signToken = (data) =>{
    return jwt.sign(data, SECRET_KEY)
}

const verifyToken = (token) =>{
    return jwt.verify(token, SECRET_KEY)
}

module.exports = { signToken, verifyToken }