function render (comentario){
    return {
        id: comentario._id,
        texto: comentario.texto,
        id_post: comentario.id_post,
        id_user: comentario.id_user,
    }
}
module.exports.render = render;

function renderMany(comentarios){
    return comentarios.map(render)
}

module.exports.renderMany = renderMany;