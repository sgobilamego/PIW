let users = [
    {id:1, nome: "Beatriz", sobrenome: "Sgobi", email: "beatriz@gmail.com", senha: "123"},
    {id:2, nome: "Isabela", sobrenome: "Lamego", email: "isa@gmail.com", senha: "456"},
    {id:3, nome: "Carolina", sobrenome: "Sartorato", email: "carol@gmail.com", senha: "789"},
    {id:4, nome: "Carolina", sobrenome: "Sgobi", email: "carolzinha@gmail.com", senha: "111"},
];

//a. POST: insere e lista um user
module.exports.inserirUser = function(req, res){
    let user = req.body;
    users.push(user);
    res.status(201).json(user);
}

//b. GET: lista todos os users
module.exports.listarUsers = function(req, res){
    let users_retorno = users;
    if(req.query.nome){
        let nome = req.query.nome;
        users_retorno = users_retorno.filter(function(user){return user.nome==nome});
    }
    res.json(users_retorno);  
}

//c. GET: busca e lista user com dado id
module.exports.buscarUserPorId = function(req,res){
    let id = req.params.id;
    let user = users.find(function(user){return user.id==id;});
    if(user){
        res.json(user);
    }else{
        res.json({mensagem: "Ops, user não encontrado! :("}).status(404);
    }
}

//d. DELETE: remover user com dado id
module.exports.removerUser = function(req, res){
    let id = req.params.id;
    users = users.filter(function(user){return user.id!=id});
    res.json ({mensagem: "User removido :X"})
}