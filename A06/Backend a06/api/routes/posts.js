const controller = require("../controllers/posts")
const controllerAuth = require ("../controllers/auth");

module.exports = function(app){
    app.post("/posts", controller.inserirPost);

    app.use("/posts", controllerAuth.checar);
    app.get("/posts", controller.listarPosts); 
    app.get("/posts/:id", controller.buscarPostPorId);
    app.get("/posts/:id/comentarios", controller.obterComent);
    app.delete("/posts/:id", controller.removerPost)
}