function render (post){
    return {
        id: post._id,
        texto: post.texto,
        likes: post.likes,
        id_user: post.id_user,
    }
}
module.exports.render = render;

function renderMany(posts){
    return posts.map(render)
}

module.exports.renderMany = renderMany;