const mongoose = require(`mongoose`)

const userSchema = new mongoose.Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const UserMan = new mongoose.model(`User`, userSchema)

module.exports = UserMan