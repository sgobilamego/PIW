const controller = require("../controllers/comentarios")
const controllerAuth = require ("../controllers/auth");

module.exports = function(app){
    app.post("/comentarios", controller.inserirComentario);
    app.get("/comentarios", controller.listarComentarios); 
    app.use("/comentarios", controllerAuth.checar);

    app.delete("/comentarios/:id", controller.removerComentario)
}