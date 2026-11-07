const express = require("express");
const userController = require("../controller/users.controller");
const userRouter = express.Router();
userRouter.post("/login", userController.userlogincontroller)
userRouter.post("/register", userController.userregistercontroller)
module.exports = userRouter