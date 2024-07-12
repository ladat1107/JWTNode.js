import express from 'express';
require('dotenv').config();
let router = express.Router();
let initWebRount = (app) => {
    router.get('/', (req, res) => {
        return res.send("hello world")
    })

    return app.use("/", router);
}
export default initWebRount;