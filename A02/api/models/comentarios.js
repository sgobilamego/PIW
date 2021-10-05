const mongoose = require('mongoose');

module.exports = function(){
    var schema = mongoose.Schema({
        texto: {
            type: String,
            required: true
        },
        id_post: { 
            type: mongoose.Schema.ObjectId,
            ref: "Post",
        },
        id_user: { 
            type: mongoose.Schema.ObjectId,
            ref: "User",
        }
    })
    return mongoose.model('Comentarios', schema);
}();