import { raw } from "body-parser";
import db from "../models/index";

const createFunction = async (data) => {
    try {
        let arrRole = await db.Role.findAll({
            attributes: ["url", "description"],
            raw: true
        })
        const difference = data.filter(obj1 => !arrRole.some(obj2 => obj1.url === obj2.url))

        if (difference) {
            let insertRow = await db.Role.bulkCreate(difference);
            if (insertRow.length > 0) {
                return {
                    EC: 0,
                    EM: `Tạo thành công ${insertRow.length} role mới`,
                    DT: "",
                }
            } else {
                return {
                    EC: 1,
                    EM: "Thêm role thất bại",
                    DT: "",
                }
            }
        } else {
            return {
                EC: 200,
                EM: "Các role đã tồn tại",
                DT: "",
            }
        }
    } catch (error) {
        console.log(error);
        return {
            EC: 500,
            EM: "Error from server",
            DT: ""
        }
    }
}
const getFunction = async () => {
    try {
        let listRole = await db.Role.findAll({
            order: [
                ['url', 'DESC']
            ],
            attributes: ["id", "url", 'description'],
            raw: true,
        });
        if (listRole) {
            return {
                EC: 0,
                EM: "Lấy danh sách role thành công",
                DT: listRole
            }
        }
        return {
            EC: 1,
            EM: "Danh sách trống",
            DT: []
        }
    } catch (error) {
        console.log(error);
        return {
            EC: 500,
            EM: "Error from server",
            DT: ""
        }
    }
}
const deleteFunction = async (roleId) => {
    try {
        let role = await db.Role.findOne({
            where: { id: roleId },
        });
        if (role) {
            await db.Role.destroy({
                where: { id: role.id }
            });
            return {
                EC: 0,
                EM: `Xóa role ${role.url} thành công`,
                DT: "",
            }
        }
        return {
            EC: 200,
            EM: "Không tìm thấy role",
            DT: "",
        }
    } catch (error) {
        console.log(error);
        return {
            EC: 500,
            EM: "Error from server",
            DT: ""
        }
    }
}
module.exports = {
    createFunction,
    getFunction,
    deleteFunction,

}