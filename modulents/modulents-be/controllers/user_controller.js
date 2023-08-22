require('dotenv').config()
const Joi = require('joi')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const userModel = require("../models/UserModel")
const userValidators = require("./validators/userValidators")

const userControllers = {
    register: async (req, res) => {
        const data = req.body

        const validationResult = userValidators.register.validate(data) // this will be to validate the data that the user keyed in against the schema
        if (validationResult.error) {
            res.statusCode = 400

            returnres.json({
                msg: validationResult.error.details[0].message
            })
        }

        // this will be to search for users with the existing email
        // return error message if so (not unique)
        try {
            const user = await userModel.findOne({ email: data.email })
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
            await userModel.create({
                name: data.name,
                email: data.email,
                password: hash,
            })
        } catch (err) {
            res.statusCode = 500
            return res.json({
                msg: "Failed to create new user"
            })
        }

        // return response upon successful creation
        res.json({
            msg: "User created successfully"
        })
    },
    login:
}