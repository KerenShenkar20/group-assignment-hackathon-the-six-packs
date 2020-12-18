// Change the name of the file if needed
const { userModel } = require("../Models/user");
const { validUser } = require("../validation/users");


const getUsers = async (req, res) => {
    try {
        userModel.find({})
            .then(data => { res.json(data); })
            .catch(err => { res.status(400).json(err); })
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        })
    }
}

const userAdd = async (req, res) => {
    try {
        let valid = validUser(req.body);
        if (!valid.error) {
            try {
                let data = await userModel.insertMany([req.body]);
                res.json(data)
            }
            catch (err) {
                res.status(400).json({ message: "user already in system ", code: "duplicate" });
            }
        }
        else {
            res.status(400).json(valid.error.details);
        }
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        })
    }
}

module.exports = {
    getUsers,
    userAdd
};



