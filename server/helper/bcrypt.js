const bcrypt = require("bcryptjs")

const hashedPassword = (password)=>{
    return bcrypt.hashSync(password)
}

const comparePassword = (password, hashedPassword)=>{
    return bcrypt.compareSync(password, hashedPassword)
}

module.exports = { hashedPassword, comparePassword }