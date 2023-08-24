const express = require("express")
const router = express.Router()
const multer = require('multer')
const companyController = require("../controllers/company_controller")

router.post("/companyRegister", companyController.register);
router.post("/companyLogin", companyController.login)


module.exports = router;