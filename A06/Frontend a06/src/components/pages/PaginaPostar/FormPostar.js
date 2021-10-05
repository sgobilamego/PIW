import './PaginaPostar.css';
import { NavLink } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from "../../../App";

function Postar({onSubmit}){

    const {register, handleSubmit} = useForm();
    const submit = comentario => onSubmit(comentario);

    return(
        <form className="card" onSubmit={handleSubmit(onSubmit)}>
            <input className="cardsubmit" type="text" placeholder="O que você está pensando?" {...register('textopost')}></input>
            <button className="botaocoment">Postar</button> 
        </form>
    )
}


function Botao() {
    const [count, setCount] = useState(0);
    return <button className="curtir-cardpost" onClick={() => setCount(count + 1)}>
        {count} likes
    </button>
}

export function FormPostar(){
    const {setAuth} = useContext(AuthContext);
    const {auth} = useContext(AuthContext);
    const [posts, setPosts] = useState ([])

    function CardPost ({user, textopost}){
        return (
            <div className="cardpost">
                <a className="usuario-cardpost">{user}</a>
                <span className="texto-cardpost">{textopost}</span>
                <Botao></Botao>
            </div>
        )
    }
    
    let cards = posts.map((post)=>(
                                <CardPost 
                                    user={auth.nome} 
                                    texto = {post.texto}>  
                                </CardPost>)
                                )

    const adicionarPost = (CardPost) =>{
        setPosts([...posts, CardPost])
    };

    return (<div className="pagina">
                <div className="container">
                    <div className="lista-posts">
                            {cards}
                            <Postar onSubmit={adicionarPost}></Postar>
                    </div>
                </div>
            </div>
    )
}

