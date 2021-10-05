const Post = require ("../models/posts");
const Comentario = require ("../models/comentarios");
const User = require ("../models/users");
const viewPost = require ("../views/posts");
const jwt = require("jsonwebtoken");

//a. POST: insere e lista o post
module.exports.inserirPost = function(req, res){
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_user_logado = payload.id;
    let id_post = req.body.id_post;

    let promise = Post.create({
        texto: req.body.texto,
        likes: req.body.likes,
        id_post: id_post,
        id_user: id_user_logado
    });
    promise.then(function(post){
        res.status(201).json(viewPost.render(post));
    }).catch(function(error){
        res.status(400).json({mensagem: "Ops, deu ruim no post :("});
    })
}

//b. GET: lista todos os posts
module.exports.listarPosts = function(req, res){
    let promise = Post.find().exec();
    promise.then(function(posts){
        res.status(200).json(viewPost.renderMany(posts));
    }).catch(function(error){
        res.status(500).json({mensagem: "Ops, deu pau!"});
    });
}

//c. GET: busca e lista post com dado id
module.exports.buscarPostPorId = function(req,res){
    let id = req.params.id;
    let promise = Post.findById(id).exec();
    promise.then(function(posts){
        res.status(200).json(viewPost.render(posts));
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
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_user_logado = payload.id;
    let id_user = req.body.id_user;

    let promise = Post.findById(id);

    promise.then(function(post){
        if(post.id_user == id_user_logado){
            Post.deleteOne({"_id" : id}).exec();
            res.json({mensagem: "O post foi removido. :)"});
        }else{
            res.status(400).json({mensagem: "Vish, não funfou :("});
        }
        
    }).catch(function(error){
        console.log(error);
    });
}