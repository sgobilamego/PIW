function render (comentario){
    return {
        texto: comentario.texto,
        id_post: comentario.id_post,
        id_user: comentario.id_user,
        id_coment: comentario._id
    }
}
module.exports.render = render;

function renderMany(comentarios){
    return comentarios.map(render)
}

module.exports.renderMany = renderMany;