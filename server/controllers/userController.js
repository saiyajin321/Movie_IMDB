const { comparePassword } = require('../helper/bcrypt')
const { signToken } = require('../helper/jwt')
const { User } = require('../models')

class UserController {
    static async userRegister(req, res, next) {
        try {
            const { username, fullname, password, confirmationPassword } = req.body
            const existingUser = await User.findOne({ where: { username } })
            if (existingUser) {
                throw { name: 'usernameDuplicate' }
            } else {
                if (password === confirmationPassword) {
                    if (password.length < 8) {
                        throw { name: 'min8Char' }
                    } else {
                        const hasSymbol = /[!@#$%^&*()_+{}\[\]:;<>,.?~]/.test(password);
                        const hasUppercase = /[A-Z]/.test(password);
                        const hasLowercase = /[a-z]/.test(password);
                        if (!hasSymbol || !hasUppercase || !hasLowercase) {
                            throw { name: 'notUnique' }
                        } else {
                            const user = await User.create({
                                username, fullname, password
                            })
                            res.status(201).json({ message: `account with username ${user.username} created` })
                        }
                    }
                }
                else {
                    throw { name: 'passwordAndConfirmationDifferent' }
                }
            }
        } catch (err) {
            next(err);
        }
    }

    static async userLogin(req, res, next) {
        try {
            const { username, password } = req.body
            if(!username || !password){
                throw {name : 'emptyBody'}
            }
            const user = await User.findOne({where : { username }})
            if(!user){
                throw { name : 'noUser'}
            }

            const isValidPassword = comparePassword(password, user.password)

            if(!isValidPassword){
                throw { name : 'invalidPassword'}
            }

            const access_token = signToken({
                id : user.id,
                username : user.username
            })
            const name = user.username
            res.status(200).json({ access_token , name})
        } catch (err) {
            next(err)
        }
    }
}

module.exports = UserController