equire('dotenv').config()
const Joi = require('joi')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const companyModel = require("../models/CompanyModel")
const companyValidators = require("./validators/companyValidators")

const companyControllers = {
    register: async (req, res) => {
        const data = req.body

        const validationResult = companyValidators.register.validate(data) // this will be to validate the data that the user keyed in against the schema
        if (validationResult.error) {
            res.statusCode = 400

            returnres.json({
                msg: validationResult.error.details[0].message
            })
        }

        // this will be to search for users with the existing email
        // return error message if so (not unique)
        try {
            const administrator = await companyModel.findOne({ administratorEmail: data.administratorEmail })
            if (user) {
                res.statusCode = 400
                return res.json({
                    msg: "Email has already been registered previously"
                })
            }
        } catch (err) {
            res.statusCode = 500
            return res.json({
                msg: "Failed to check for duplicates"
            })
        }

        // hashing algorithm to be applied to the provided password
        // pw hash will flow into mongo DB

        const hash = await bcrypt.hash(data.password, 10)

        // use userModel to create the new user
        try {
            await companyModel.create({
                name: data.name,
                administratorEmail: data.administratorEmail,
                password: hash,
            })
        } catch (err) {
            res.statusCode = 500
            return res.json({
                msg: "Failed to create new admin"
            })
        }

        // return response upon successful creation
        res.json({
            msg: "User created successfully"
        })
    },
    login: async (req, res) => {
        const data = req.body

        const validationResult = companyValidators.loginSchema.validate(data)

        if (validationResult.error) {
            res.statusCode = 400
            return res.json({
                msg: validationResult.error.details[0].message
            })
        }

        // check if the user exists or has registered via their email (unique identifier)
        // return login error status code 400 if not found

        let administrator = null
        try {
            administrator = await companyModel.findOne({ administratorEmail: data.administratorEmail })
        } catch (err) {
            res.statusCode = 500
            return res.json({
                msg: "Error occured when fetching admin"
            })
        }

        if (!administrator) {
            res.statusCode = 401
            return res.json({
                msg: "Login failed, admin email not registered"
            })
        }

        // bcrypt will be used to compare the entered password against the DB record in mongo and return 401 status error message

        const validLogin = await bcrypt.compare(data.password, administrator.password)

        if (!validLogin) {
            res.statusCode = 401
            return res.json({
                msg: "Login failed, incorrect password"
            })
        }
        // generate JWT using an external lib
        const token = jwt.sign(
            {
                name: user.name,
                administratorEmail: administrator.email,
            },
            process.env.APP_KEY,
            {
                expiresIn: "10 days",
                audience: "FE",
                issuer: "BE",
                subject: user._id.toString(), // _id from Mongoose is type of ObjectID,
            }
        )

        // return response with JWT
        res.json({
            msg: 'Success',
            token: token,
        })
    }
}

module.exports = companyControllers