import db from "../models/index";
import bcrypt from "bcrypt";

const salt = bcrypt.genSaltSync(10);

let hashPasswordUser = async (password) => {
    try {
        let hashPassword = await bcrypt.hashSync(password, salt);
        return hashPassword;
    } catch (e) {
        console.log(e);
        return {
            EC: 500,
            EM: "Lỗi hệ thống",
        }
    }
}


const checkEmail = async (email) => {
    try {
        let user = await db.User.findOne({
            where: { email: email }
        });

        if (user) {
            return false;
        }
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}
const checkPhoneNumber = async (phoneNumber) => {
    try {
        let user = await db.User.findOne({ where: { phoneNumber: phoneNumber } });
        if (user) {
            return false;
        }
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}
const registerUser = async (data) => {
    try {
        if (await checkEmail(data.email) == false) {
            return {
                EC: 200,
                EM: "Email đã tồn tại",
                DT: "",
            }
        }
        if (await checkPhoneNumber(data.phoneNumber) == false) {
            return {
                EC: 200,
                EM: "Số điện thoại đã tồn tại",
                DT: "",
            }
        }
        let passwordHash = await hashPasswordUser(data.password)
        console.log("check passwordHash:", passwordHash);
        let user = await db.User.create({
            email: data.email,
            password: passwordHash,
            userName: data.userName,
            phoneNumber: data.phoneNumber,
            groupId: 1,
        })
        if (user) {
            return {
                EC: 200,
                EM: "Đăng ký thành công",
                DT: "",
            }
        } else {
            return {
                EC: 200,
                EM: "Đăng ký thất bại",
                DT: "",
            }
        }
    } catch (error) {
        console.log(error);
        return {
            EC: 500,
            EM: "Error from server",
            DT: "",
        }
    }
}

module.exports = {
    registerUser,

}