const { Schema, Types, model } = require('mongoose');

const userSchema = new Schema({
    clicks: {
        type: Number,
        required: true
    },
    
});

const User = model('User', userSchema);

module.exports = User;