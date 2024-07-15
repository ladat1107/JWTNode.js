import userService from '../services/userService'
const handleRegisterUser = async (req, res) => {
    try {
        let data = req.body
        if (!data || !data.email || !data.password || !data.userName || !data.phoneNumber) {
            return res.status(200).json({
                EC: 200,
                EM: "Input is empty",
                DT: ""
            })
        }
        let response = await userService.registerUser(data);
        return res.status(200).json({
            EC: response.EC,
            EM: response.EM,
            DT: response.DT
        })
    } catch (error) {
        return res.status(500).json({
            EC: 500,
            EM: "Error from server",
            DT: ""
        })
    }

}

module.exports = {
    handleRegisterUser
}