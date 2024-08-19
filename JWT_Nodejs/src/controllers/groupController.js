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
        return res.status(200).json({
            EC: 500,
            EM: 'Error from server',
            DT: '',
        });
    }
}

module.exports = {
    getFunction,
}