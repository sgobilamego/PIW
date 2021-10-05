import './Navegador.css';
import logo from './Frame.png';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from "../../../App";


function NavegadorLogado({nome}){
    const {setAuth} = useContext(AuthContext);
    return(
    <div className="nav">
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

                <div className="botao" onClick={()=>{setAuth({token:null, nome:null})}}>
                    Logout
                </div>

                <div className="user-logado">
                    {nome}
                </div>
            </nav>
    </div>
    )
}

function NavegadorNaoLogado(){
    return(
        (<div className="nav">
            <img className="logo" src={logo} alt="" />
                <nav className="nav">
                    <NavLink 
                        className="botao"
                        to="/login">Login
                    </NavLink>

                    <NavLink 
                        className="botao"
                        to="/cadastro">Cadastre-se
                    </NavLink>
            </nav>
        </div>)
    )
}

export function Nav(){
    const {auth} = useContext(AuthContext);
    return(
        <div>
            {auth.token == null?
                <NavegadorNaoLogado></NavegadorNaoLogado> : 
                <NavegadorLogado nome={auth.nome}></NavegadorLogado>
            }
        </div>
    )
}