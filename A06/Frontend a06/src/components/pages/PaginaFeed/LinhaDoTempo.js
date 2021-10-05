import './PaginaFeed.css';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from "../../../App";


function FormComentar({onSubmit}){

    const {register, handleSubmit} = useForm();
    const submit = comentario => onSubmit(comentario);

    return(
        <div className="pagina">
            <div className = "container">
                <div className = "lista-posts">
                    <form className="card" onSubmit={handleSubmit(onSubmit)}>
                        <input className="cardsubmit" type="text" placeholder="Deixe o seu comentário" {...register('texto')}></input>
                        <button className="botaocoment">Submeter</button> 
                    </form>
                </div>
            </div>
        </div>
    )
}

let infoComentsFixo = [
    {
        user: "Eduarda", 
        texto: "Um isósceles, minha vaquinha chama Rose", 
    },
    {
        user: "Isa", 
        texto: "o nome da minha vaquinha é Yntic", 
    },
];

function Botao() {
    const [count, setCount] = useState(0);
    return <button className="curtir-cardpost" onClick={() => setCount(count + 1)}>
        {count} likes
    </button>
}

function CardPost ({user, texto}){
    return (
        <div className="cardpost">
            <a className="usuario-cardpost">{user}</a>
            <span className="texto-cardpost">{texto}</span>
            <Botao></Botao>
        </div>
    )
}

export function LinhaDoTempo({nome, posts}){
    const {setAuth} = useContext(AuthContext);
    const {auth} = useContext(AuthContext);
    let cards = posts.map((post)=>(
                                <CardPost 
                                    user={auth.nome} 
                                    texto = {post.texto}>  
                                </CardPost>)
                                )

    const [infoComents, setComentarios] = useState ([]) 
    
    function CardComents ({nome, texto}){
            return (
                <div className="cardcoment">
                    <h3 className="usuario-cardcoment">{auth.nome}</h3>
                    <span className="texto-cardcoment">{texto}</span>
                </div>
            )
        }

    let cardcoments = infoComents.map((coment)=>(
                                    <CardComents 
                                        user={coment.user} 
                                        texto = {coment.texto}>
                                    </CardComents>))
    
    const adicionarComentario = (CardComents) =>{
        setComentarios([...infoComents, CardComents])
    };

    return(
            <div className="lista-posts">
                {cards}
                <a className="titulo">Comentários:</a>
                {cardcoments}
                <FormComentar onSubmit={adicionarComentario}></FormComentar>
            </div>
    )
}
