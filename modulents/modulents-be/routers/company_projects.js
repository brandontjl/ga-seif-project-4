const express = require("express")
const router = express.Router()
const multer = require('multer')
const projectController = require("../controllers/projects_controller")
const authMiddleware = require("../middlewares/auth_middleware")

router.get("/", authMiddleware, projectController.listProjects);
router.post("/", authMiddleware, projectController.createProject);
router.post("/delete", authMiddleware, projectController.deleteProject);
router.post("/update/:recordID", authMiddleware, projectController.updateProject);

module.exports = router;