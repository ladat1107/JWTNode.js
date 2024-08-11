import express from 'express';
import userController from '../controllers/userController';
import groupController from "../controllers/groupController";
require('dotenv').config();
let router = express.Router();
let initWebRount = (app) => {
    router.post("/registerUser", userController.handleRegisterUser)
    router.post("/handleLogin", userController.handleLogin)
    router.get("/user/get", userController.getFunction)
    router.get("/user/getById", userController.getFunctionById)
    router.post("/user/create", userController.createFunction)
    router.put("/user/update", userController.updateFunction)
    router.delete("/user/delete", userController.deleteFunction)

    router.get("/group/get", groupController.getFunction)

    return app.use("/api/", router);
}
export default initWebRount;