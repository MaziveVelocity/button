const { Schema, Types, model } = require('mongoose');

const userSchema = new Schema({
    _id: {
        type: Types.ObjectId,
        unique: true,
        required: true
    },

    clicks: {
        type: Number,
        required: true
    }
});

const User = model('User', userSchema);

module.exports = User;