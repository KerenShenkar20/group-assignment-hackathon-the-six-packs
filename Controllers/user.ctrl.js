const User = require('../Models/user');


exports.userController = {
    getUsers(req, res) {
        User.find({})
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },

    addUser(req, res) {
        const { body } = req;
        console.log(body);
        const newUser = new User(body);
        const result = newUser.save();
        if (result) {
            res.json(newUser)
        } else {
            res.status(404).send("Error saving a user");
        }
    },
};
