const controller = require("../controllers/comentarios")

module.exports = function(app){
    app.post("/comentarios", controller.inserirComentario);
    app.get("/comentarios", controller.listarComentarios); 
    app.delete("/comentarios/:id", controller.removerComentario)
}