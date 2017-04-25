const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('config');

const MessageSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    updated: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});
module.exports = mongoose.model('Message', MessageSchema);