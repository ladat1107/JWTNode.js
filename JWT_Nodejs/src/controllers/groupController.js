import groupService from '../services/groupService';

const getFunction = async (req, res) => {
    try {
        let response = await groupService.getFunction();
        return res.status(200).json({
            EC: response.EC,
            EM: response.EM,
            DT: response.DT,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            EC: 500,
            EM: 'Error from server',
            DT: '',
        });
    }
}
const getByIdFunction = async (req, res) => {
    try {
        if (req && +req.query.id) {
            let response = await groupService.getByIdFunction(req.query.id);
            return res.status(200).json({
                EC: response.EC,
                EM: response.EM,
                DT: response.DT,
            });
        } else {
            return res.status(400).json({
                EC: 400,
                EM: 'Không tìm thấy nhóm tương ứng',
                DT: '',
            });
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EC: 500,
            EM: 'Error from server',
            DT: '',
        });
    }
}
module.exports = {
    getFunction,
    getByIdFunction
}