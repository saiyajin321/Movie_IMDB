const errorHandler = (err, req, res, next) => {
    console.log(err.name);
    if (err.name === 'min8Char') {
        res.status(400).json({ message: 'Password must be at least 8 characters long' })
    } else if (err.name === 'passwordAndConfirmationDifferent') {
        res.status(400).json({ message: 'Password and confirmation password are different' })
    } else if (err.name === 'notUnique') {
        res.status(400).json({ message: 'The password must contain uppercase, lowercase and symbols' })
    } else if (err.name === 'usernameDuplicate') {
        res.status(400).json({ message: 'Username already exists' })
    } else if (err.name === 'emptyBody') {
        res.status(400).json({ message: 'Username / password cannot be empty' })
    } else if (err.name === 'noUser') {
        res.status(400).json({ message: 'Username not found' })
    } else if (err.name === 'invalidPassword') {
        res.status(400).json({ message: 'Username / password is incorrect' })
    } else if (err.name === 'noAccessToken') {
        res.status(403).json({ message: 'Invalid Token' })
    } else if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {
        res.status(400).json({ message: err.errors[0].message })
    } else {
        res.status(500).json({ message: "Internal server error" })
    }
}

module.exports = { errorHandler }