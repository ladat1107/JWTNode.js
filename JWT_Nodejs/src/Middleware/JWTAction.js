import jwt from "jsonwebtoken";
require('dotenv').config();
const createToken = (payload) => {
    let key = process.env.SECURITY_KEY;

    let token = null;
    try {
        token = jwt.sign(payload, key);
    } catch (error) {
        console.log(error);
    }
    return token;
}
const verifyToken = (token) => {
    let key = process.env.SECURITY_KEY;
    let data = null;
    try {
        let decoded = jwt.verify(token, key);
        data = decoded;
    } catch (error) {
        console.log(error);
    }
    return data;
}
module.exports = {
    createToken,
    verifyToken,
}