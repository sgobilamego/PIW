const controller = require("../controllers/posts")

module.exports = function(app){
    app.get("/posts", controller.listarPosts); 
    app.get("/posts/:id", controller.buscarPostPorId);
    app.get("/posts/:id/comentarios", controller.obterComent);
    app.post("/posts", controller.inserirPost);
    app.delete("/posts/:id", controller.removerPost)
}