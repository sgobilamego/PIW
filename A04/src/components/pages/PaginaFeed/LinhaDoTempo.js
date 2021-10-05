export function LinhaDoTempo(){
    let infoPosts = [
        {
            user: "Triz", 
            texto: "Eu só queria me formar", 
            likes: 100

        },
        {
            user: "Isa", 
            texto: "Vish que sono", 
            likes: 527
        },
        {
            user: "Carol", 
            texto: "Bebeu água?", 
            likes: 650
        },
        {
            user: "Leth", 
            texto: "Pessoal? Amigao?", 
            likes: 264
        },
        {
            user: "Ananda", 
            texto: "O que é hein mulher", 
            likes: 850
        },
        {
            user: "Laysa", 
            texto: "Eu sou linda e fofa", 
            likes: 750
        },
        {
            user: "Jefo", 
            texto: "Piadas #humor", 
            likes: 650
        },
    ];

    function Card ({user, texto, likes}){
        return (
            <div className="card">
                <h3 className="usuario-card">{user}</h3>
                <span className="texto-card">{texto}</span>
                <span className="likes-card">Likes: {likes}</span>
                <button className="curtir-card">Curtir</button>
            </div>
        )
    }
    
    let cards = infoPosts.map((post)=>(
                                    <Card 
                                        user={post.user} 
                                        texto = {post.texto}
                                        likes = {post.likes}>  
                                    </Card>))

    return(
            <div className="lista-posts">
                {cards}
            </div>
    )
}