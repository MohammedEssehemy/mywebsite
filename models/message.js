const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    username:{
        type:String,
        required: true
    },
   email: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Message', MessageSchema);