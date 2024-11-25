const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersControllers");

router.get("/register", usersController.showRegister);
router.get("/login", usersController.showLogin);
router.get("/profile", usersController.profile);
router.post("/register", usersController.register);
router.post("/login", usersController.login);

module.exports = router;