const express = require("express")
const router = express.Router()
const userController = require("../controllers/user_controller")

router.post("/userRegister", userController.register);
router.post("/userLogin", userController.login)

module.exports = router;
