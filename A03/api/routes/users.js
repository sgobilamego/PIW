const controller = require("../controllers/users")
const controllerAuth = require ("../controllers/auth");

module.exports = function(app){
    app.post("/users/signin", controllerAuth.logar);
    app.post("/users", controller.inserirUser);
    
    app.use("/users", controllerAuth.checar);
    app.get("/users", controller.listarUsers); 
    app.get("/users/:id", controller.buscarUserPorId);
    app.get("/users/:id/posts", controller.obterPosts);
    app.delete("/users/:id", controller.removerUser);
}