import { infoPosts } from "./PaginaFeed/LinhaDoTempo";

export function Post(){
    let Postagem = (props) => (<ul>
        <li>
            <a>{props.user}</a>
        </li>
        <li>
            <a>{props.texto}</a>
        </li>
        <li>
            <a>{props.likes}</a> 
        </li>
        <button className="likes-card">Curtir</button>
    </ul>
    )

    for (let i=0; i < infoPosts.lenght; i++){
        return infoPosts.map((infoPost) => (
            <Postagem 
                user={infoPost.user}
                texto={infoPost.texto}
                likes={infoPost.likes}>
            </Postagem>
        ))
    }
}