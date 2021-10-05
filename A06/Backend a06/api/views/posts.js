function render (post){
    return {
        id_post: post._id,
        id_user: post.id_user,
        texto: post.texto,
        likes: post.likes,
    }
}
module.exports.render = render;

function renderMany(posts){
    return posts.map(render)
}

module.exports.renderMany = renderMany;