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
module.exports = {
    getFunction,
}