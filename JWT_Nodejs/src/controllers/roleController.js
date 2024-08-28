import roleService from '../services/roleService'
import _ from "lodash"
const getFunction = async (req, res) => {
    try {
        let response = await roleService.getFunction();
        return res.status(200).json({
            EC: response.EC,
            EM: response.EM,
            DT: response.DT
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EC: 500,
            EM: "Error from server",
            DT: ""
        })
    }
}
const createFunction = async (req, res) => {
    try {
        let data = req.body;
        if (!_.isEmpty(data)) {
            let response = await roleService.createFunction(data);
            return res.status(200).json({
                EC: response.EC,
                EM: response.EM,
                DT: response.DT
            })
        } else {
            return res.status(400).json({
                EC: 400,
                EM: "Dữ liệu không được để trống",
                DT: ""
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EC: 500,
            EM: "Error from server",
            DT: ""
        })
    }
}
const updateFunction = async (req, res) => {
    try {
        let data = req.body;
        if (data) {
            let arr = ["id", "userName", "email", "phoneNumber", "gender", "groupId"];
            for (let i = 0; i < arr.length; i++) {
                if (!data[arr[i]]) {
                    return res.status(400).json({
                        EC: 400,
                        EM: `Dữ liệu ${arr[i]} không được để trống`,
                        DT: ""
                    })
                }
            }
            let response = await roleService.updateFunction(data);
            return res.status(200).json({
                EC: response.EC,
                EM: response.EM,
                DT: response.DT
            })
        } else {
            return res.status(400).json({
                EC: 400,
                EM: "Dữ liệu không được để trống",
                DT: ""
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EC: 500,
            EM: "Error from server",
            DT: ""
        })
    }
}
const deleteFunction = async (req, res) => {
    try {
        let data = req.body;
        if (data && data.id) {
            let response = await roleService.deleteFunction(data.id);
            return res.status(200).json({
                EC: response.EC,
                EM: response.EM,
                DT: response.DT
            })
        } else {
            return res.status(200).json({
                EC: 400,
                EM: "Input is empty",
                DT: ""
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            EC: 500,
            EM: "Error from server",
            DT: ""
        })
    }
}
const getFunctionById = async (req, res) => {
    try {
        let data = req.query;
        if (data && data.id) {
            let response = await roleService.getFunctionById(data.id);
            return res.status(200).json({
                EC: response.EC,
                EM: response.EM,
                DT: response.DT
            })
        } else {
            return res.status(200).json({
                EC: 400,
                EM: "Không tìm thấy người dùng",
                DT: ""
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            EC: 500,
            EM: "Error from server",
            DT: ""
        })
    }
}

module.exports = {
    getFunction,
    createFunction,
    updateFunction,
    deleteFunction,
    getFunctionById,

}