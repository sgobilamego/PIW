const User = require ("../models/users");
const Post = require ("../models/posts");
const Comentario = require ("../models/comentarios");
const view = require ("../views/users");

//a. POST: insere e lista um user
module.exports.inserirUser = function(req, res){
    let user = req.body;
    let promise = User.create(req.body)
    promise.then(function(user){
        res.status(201).json(view.render(user));
    }).catch(function(error){
       res.status(400).json({mensagem: "Ops, deu erro no user"});
    })
}

//b. GET: lista todos os users
module.exports.listarUsers = function(req, res){
    let promise = User.find().exec();
    promise.then(function(users){
        res.status(200).json(view.renderMany(users));
    }).catch(function(error){
        res.status(500).json({mensagem: "Ops, deu pau no get"});
    });
}

//c. GET: busca e lista user com dado id
module.exports.buscarUserPorId = function(req,res){
    let id = req.params.id;
    let promise = User.findById(id).exec();
    promise.then(function(user){
        res.status(200).json(view.render(user));
    }).catch(function(error){
        res.status(400).json({mensagem: "Vish, sua requisição deu erro </3"});
    });
}

//d. GET: lista todos os posts de um user com dado id
module.exports.obterPosts = function(req, res){
    let id = req.params.id;
    let promise = Post.find({"id_user":id}).exec();
    promise.then(function(post){
        res.status(200).json(post);
    }).catch(function(error){
        res.status(500).json({mensagem: "Vish, não funfou :("});
    })
}

//e. DELETE: remover user com dado id
module.exports.removerUser = function(req, res){
    let id = req.params.id;
    let promise = User.findByIdAndDelete(id);
    promise.then(function(user){
        res.status(200).json(view.render(user));
    }).catch(function(error){
        res.status(400).json({mensagem: "Vish, não funfou :("});
    })
}