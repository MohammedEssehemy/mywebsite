const mongoose = require('mongoose');
const BookmarkSchema = mongoose.Schema({
   title: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
       required: true
    },
    lng: {
         type: Number,
       required: true
    },
     userId:{
         type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        }
    
});
module.exports = mongoose.model('Bookmark', BookmarkSchema);