const mongoose = require('mongoose');

module.exports = function(){
    var schema = mongoose.Schema({
        texto: {
            type: String,
            required: true
        },
        likes: { 
            type:String,
            required: true
        },
        id_user: { 
            type:String,
            required: true
        },
    })
    return mongoose.model('Post', schema);
}();
