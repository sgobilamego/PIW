const Post = require ("../models/posts");
const Comentario = require ("../models/comentarios");
const User = require ("../models/users");
const view = require ("../views/posts");

//a. POST: insere e lista o post
module.exports.inserirPost = function(req, res){
    let post = req.body;
    let promise = Post.create(req.body)
    promise.then(function(post){
        res.status(201).json(view.render(post));
    }).catch(function(error){
       res.status(400).json({mensagem: "Ops, deu erro no post :("});
    })
}

//b. GET: lista todos os posts
module.exports.listarPosts = function(req, res){
    let promise = Post.find().exec();
    promise.then(function(posts){
        res.status(200).json(view.renderMany(posts));
    }).catch(function(error){
        res.status(500).json({mensagem: "Ops, deu pau!"});
    });
}

//c. GET: busca e lista post com dado id
module.exports.buscarPostPorId = function(req,res){
    let id = req.params.id;
    let promise = Post.findById(id).exec();
    promise.then(function(posts){
        res.status(200).json(view.render(posts));
    }).catch(function(error){
        res.status(400).json({mensagem: "Vish, sua requisição deu erro </3"});
    });
}

//d. GET: lista todos os comentários de um post com dado id
module.exports.obterComent = function(req, res){
    let id = req.params.id;
    let promise = Comentario.find({"id_post":id});
    promise.then(function(comentarios){
        res.status(200).json(comentarios);
    }).catch(function(error){
        res.status(500).json({mensagem: "Vish, não funfou :("});
    })
}

//e. DELETE: remover post com dado id
module.exports.removerPost = function(req, res){
    let id = req.params.id;
    let promise = Post.findByIdAndDelete(id);
    promise.then(function(post){
        res.status(200).json(post);
    }).catch(function(error){
        res.status(400).json({mensagem: "Vish, não funfou :("});
    })
}