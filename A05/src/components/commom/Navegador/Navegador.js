import './Navegador.css';
import logo from './Frame.png';
import { NavLink } from 'react-router-dom';

export function Nav(){
    return(<div className="nav">
                <img className="logo" src={logo} alt="" />
                    <nav className="nav">
                        <NavLink 
                            exact
                            className="botao" 
                            to="/">Linha do Tempo
                        </NavLink>
                        
                        <NavLink 
                            className="botao"
                            to="/posts">Postar
                            </NavLink>
                            
                        <span className="user-logado">Beatriz</span>
                    </nav>
            </div>
    )
}