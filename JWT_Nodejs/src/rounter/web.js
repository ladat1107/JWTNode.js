import express from 'express';
import userController from '../controllers/userController';
require('dotenv').config();
let router = express.Router();
let initWebRount = (app) => {
    router.post("/registerUser", userController.handleRegisterUser)

    return app.use("/api/", router);
}
export default initWebRount;