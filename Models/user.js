const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    first_name: { type: String },
    last_name: { type: String },
    age: { type: Number },
    subject: { type: String },
    address: { type: String },

}, { collection: 'users' });

const userModel = model('User', userSchema);

module.exports = userModel;
