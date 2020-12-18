const { boolean, string } = require('joi');
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    first_name: { type: String },
    last_name: { type: String },
    age: { type: Number },
    subject: { type: String },
    address: { type: String },
    match: { type: Boolean, default: false },

}, { collection: 'users' });

const userModel = model('userModel', userSchema);

module.exports = userModel;
