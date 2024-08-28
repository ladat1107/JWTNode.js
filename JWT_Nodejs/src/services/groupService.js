import db from "../models/index";
const getFunction = async () => {
    try {
        let listGroup = await db.Group.findAll();
        if (listGroup.length > 0) {
            return {
                EC: 0,
                EM: "Lấy danh sách nhóm thành công",
                DT: listGroup,
            }
        } else {
            return {
                EC: 200,
                EM: "Chưa có nhóm nào",
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
const getByIdFunction = async (groupId) => {
    try {
        let groupRole = await db.Group.findAll({
            where: { id: groupId },
            attributes: ["id", "name", "description"],
            include: [
                {
                    model: db.Role, as: "groupData",
                    attributes: ["id", "url", "description"],
                    through: { attributes: [] },
                }
            ],
            raw: false,
            nest: true,
        });
        if (groupRole) {
            return {
                EC: 0,
                EM: "Lấy thành công",
                DT: groupRole,
            }
        } else {
            return {
                EC: 200,
                EM: "Chưa có nhóm nào",
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
    getFunction,
    getByIdFunction
}