import express from 'express';
import userController from '../controllers/userController';
import roleController from '../controllers/roleController';
import groupController from "../controllers/groupController";
import groupRoleController from "../controllers/groupRoleController";
import { checkTokenWithCookie, checkAuthentication } from "../Middleware/JWTAction";
require('dotenv').config();
let router = express.Router();
let initWebRount = (app) => {
    router.all("*", checkTokenWithCookie, checkAuthentication)

    router.post("/registerUser", userController.handleRegisterUser)
    router.post("/handleLogin", userController.handleLogin)
    router.post("/handleLogout", userController.handleLogout)

    router.get("/account", userController.handleGetAccount)
    router.get("/user/get", userController.getFunction)
    router.get("/user/getById", userController.getFunctionById)
    router.post("/user/create", userController.createFunction)
    router.put("/user/update", userController.updateFunction)
    router.delete("/user/delete", userController.deleteFunction)

    router.get("/role/get", roleController.getFunction)
    router.get("/role/getById", roleController.getFunctionById)
    router.post("/role/create", roleController.createFunction)
    router.put("/role/update", roleController.updateFunction)
    router.delete("/role/delete", roleController.deleteFunction)


    router.get("/group/get", groupController.getFunction)
    router.get("/group/getById", groupController.getByIdFunction)

    router.post("/groupRole/create", groupRoleController.createFunction)

    return app.use("/api/", router);
}
export default initWebRount;