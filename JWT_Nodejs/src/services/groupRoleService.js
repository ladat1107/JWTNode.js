import { where } from "sequelize";
import db from "../models/index";
const createFunction = async (data) => {
    try {
        await db.GroupRole.destroy({
            where: { groupId: +data[0].groupId }
        });
        await db.GroupRole.bulkCreate(data)
        return {
            EC: 0,
            EM: "Phân quyền thành công",
            DT: "",
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
    createFunction
}