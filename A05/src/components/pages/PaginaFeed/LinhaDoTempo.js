import './PaginaFeed.css';

export function LinhaDoTempo(){
    let infoPosts = [
        {
            user: "Beatriz", 
            texto: "Desenhe um triângulo no teclado, o que sair é o nome da sua vaquinha", 
            likes: 324
        },
    ];

    function CardPost ({user, texto, likes}){
        return (
            <div className="cardpost">
                <a className="usuario-cardpost">{user}</a>
                <span className="texto-cardpost">{texto}</span>
                <span className="likes-cardpost">+{likes} curtidas</span>
                <button className="curtir-cardpost">Curtir</button>
            </div>
        )
    }
    
    let cards = infoPosts.map((post)=>(
                                    <CardPost 
                                        user={post.user} 
                                        texto = {post.texto}
                                        likes = {post.likes}>  
                                    </CardPost>))

    let infoComents = [
        {
            user: "Camila", 
            texto: "Cunha, dale", 
        },
        {
            user: "Rodrigo", 
            texto: "Rédigé em um triângulo obtusangulo", 
        },
        {
            user: "Eduarda", 
            texto: "Um isósceles, minha vaquinha chama Rose", 
        },
        {
            user: "Isa", 
            texto: "o nome da minha vaquinha é Yntic", 
        },
    ];

    function CardComents ({user, texto}){
        return (
            <div className="cardcoment">
                <h3 className="usuario-cardcoment">{user}</h3>
                <span className="texto-cardcoment">{texto}</span>
            </div>
        )
    }

    let cardcoments = infoComents.map((coment)=>(
                                    <CardComents 
                                        user={coment.user} 
                                        texto = {coment.texto}>
                                    </CardComents>))

    return(
            <div className="lista-posts">
                {cards}
                <a className="titulo">Comentários:</a>
                {cardcoments}
            </div>
    )
}
