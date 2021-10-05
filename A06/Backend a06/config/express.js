// Exportando módulo (PadrãoCommonJS)
module.exports = function () {
    let app = express ();
    //Definindo variável de aplicação
    app.set("port",8393);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    
    app.use(express.static("./public"));
    routerPosts(app);
    routerUsers(app);
    routerComentarios(app);
    return app;
}

// Importando módulo express (Padrão CommonJS)
const express = require ('express');
const routerPosts = require("../api/routes/posts")
const routerUsers = require("../api/routes/users")
const routerComentarios = require("../api/routes/comentarios")
const bodyParser = require("body-parser");

// Exportando módulo (PadrãoCommonJS)
module.exports = function () {
    let app = express ();
    //Definindo variável de aplicação
    app.set("port",8393);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    
    app.use(express.static("./public"));
    routerPosts(app);
    routerUsers(app);
    routerComentarios(app);
    return app;
}
