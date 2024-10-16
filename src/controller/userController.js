const userService = require('../service/userService');

require('dotenv').config();

class UserController {

    createNewUser = async (req, res) => {
        try {
            if (req.file) {
                req.body.avatarCloud = req.file.path;
            }
            let response = await userService.createNewUser(req.body);
            switch (response.errCode) {
                case 1:
                    return res.status(400).json(response);
                    break;
                case 2:
                    return res.status(409).json(response);
                    break;

                default:
                    return res.status(200).json(response);
                    break;
            }

        } catch (error) {
            console.error(error);  // Sử dụng console.error để in rõ ràng lỗi
            res.status(500).json({ error: error.message });
        }
    }



}
module.exports = new UserController();