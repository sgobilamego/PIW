import './PaginaPostar.css';
import { NavLink } from 'react-router-dom';

export function FormPostar(){
    return (<div className="pagina">
                <div className="container">
                    <div className="lista-posts">
                        <div className="card">
                            <Postar></Postar>
                            <NavLink 
                                exact
                                className="botao" 
                                to="/">Submeter
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
    )
}

function Postar(){
    return(
        <form>
            <div> 
                <textarea className="cardmsg" id="msg" placeholder="Escreva aqui sua mensagem..."></textarea>
            </div>
        </form>
    )
}