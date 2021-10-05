const Comentario = require ("../models/comentarios");
const User = require ("../models/users");
const Post = require ("../models/posts");
const view = require ("../views/comentarios");

//a. POST: insere e lista coment
module.exports.inserirComentario = function(req, res){
    let comentario = req.body;
    let promise = Comentario.create(req.body)
    promise.then(function(comentario){
        res.status(201).json(view.render(comentario));
    }).catch(function(error){
       res.status(400).json({mensagem: "Ops, deu erro no post :("});
    })
}

//b. GET: lista todos os coments
module.exports.listarComentarios = function(req, res){
    let promise = Comentario.find().populate("Post").populate("User").exec();
    promise.then(function(comentario){
        res.status(200).json(comentario);
    }).catch(function(error){
        res.status(500).json({mensagem: "Ops, deu pau!"});
    });
}


//c. DELETE: remover coment com dado id
module.exports.removerComentario = function(req, res){
    let id = req.params.id;
    let promise = Comentario.findByIdAndDelete(id);
    promise.then(function(comentario){
        res.status(200).json(view.render(comentario));
    }).catch(function(error){
        res.status(400).json({mensagem: "Vish, não funfou :("});
    })
}