// might not be required if everything can be done via the user routing

const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    administratorEmail: { // this will be the registered email of the registered user
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const Company = mongoose.model('Company', companySchema)

module.exports = Company