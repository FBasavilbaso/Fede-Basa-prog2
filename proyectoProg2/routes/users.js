const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersControllers");

router.get("/register", usersController.showRegister);
router.get("/login", usersController.showLogin);
router.get("/profile/:id", usersController.profile);

router.post("/register", usersController.register);
router.post("/login", usersController.login);
router.post("/logout", usersController.logout);

module.exports = router;