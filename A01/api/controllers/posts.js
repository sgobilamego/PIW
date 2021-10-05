let posts = [
    {id:1, texto: "Nem on, nem off", likes: "10"},
    {id:2, texto: "Eu viciei", likes: "20"},
    {id:3, texto: "Pode chorar", likes: "30"},
    {id:4, texto: "Desculpa, mas não sou babá", likes: "40"},
];

//a. POST: insere e lista o post
module.exports.inserirPost = function(req, res){
    let post = req.body;
    posts.push(post);
    res.status(201).json(post);
}

//b. GET: lista todos os posts
module.exports.listarPosts = function(req, res){
    let posts_retorno = posts;
    if(req.query.nome){
        let id = req.query.id;
        posts_retorno = posts_retorno.filter(function(post){return post.id==id});
    }
    res.json(posts_retorno);  
}

//c. GET: busca e lista post com dado id
module.exports.buscarPostPorId = function(req,res){
    let id = req.params.id;
    let post = posts.find(function(post){return post.id==id;});
    if(post){
        res.json(post);
    }else{
        res.json({mensagem: "Ops, post não encontrado! :("}).status(404);
    }
}

//d. DELETE: remover post com dado id
module.exports.removerPost = function(req, res){
    let id = req.params.id;
    posts = posts.filter(function(post){return post.id!=id});
    res.json ({mensagem: "Ish, post removido :X"})
}