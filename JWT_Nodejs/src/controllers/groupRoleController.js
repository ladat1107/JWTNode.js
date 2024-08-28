import groupRoleService from '../services/groupRoleService';

const createFunction = async (req, res) => {
    try {
        let response = await groupRoleService.createFunction(req.body);
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

module.exports = {
    createFunction,
}