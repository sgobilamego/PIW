import './PaginaFeed.css';
import logo from './Frame.png';
import { LinhaDoTempo } from './LinhaDoTempo';


export function Nav(){
    return(<div className="nav">
                <img className="logo" src={logo} alt="" />
                    <nav className="nav">
                        <button className="botao-press">Linha do Tempo</button>
                        <button className="botao">Postar</button>
                        <span className="user-logado">Beatriz</span>
                    </nav>
            </div>
    )
}

export function PaginaFeed(){
    return (<div className="pagina">
                <div className="container">
                    <Nav paginaAtual="homepage"></Nav>
                    <LinhaDoTempo></LinhaDoTempo>
                </div>
            </div>
            )
}