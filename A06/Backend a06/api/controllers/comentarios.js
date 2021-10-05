const Comentario = require ("../models/comentarios");
const User = require ("../models/users");
const Post = require ("../models/posts");
const viewComentario = require ("../views/comentarios");
const jwt = require("jsonwebtoken");

//a. POST: insere e lista coment
module.exports.inserirComentario = function(req, res){
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_user_logado = payload.id;
    let id_post = req.body.id_post;

    let promise = Comentario.create({
        texto: req.body.texto,
        id_post: id_post,
        id_user: id_user_logado
    });
    promise.then(function(comentario){
        res.status(201).json(viewComentario.render(comentario));
    }).catch(function(error){
        res.status(400).json({mensagem: "Ops, deu ruim :("});
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
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_user_logado = payload.id;

    let promise = Comentario.findById(id);

    promise.then(function(comentario){
        if(comentario.id_user == id_user_logado){
            Comentario.deleteOne({"_id" : id}).exec();
            res.json({mensagem: "O comentário foi removido."});
        }else{
            res.status(400).json({mensagem: "Vish, não funfou :("});
        }
        
    }).catch(function(error){
        console.log(error);
    });
}