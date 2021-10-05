import './PaginaLogin.css';
import history from "../../../history";
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { login } from "../../../api/auth";
import { useContext } from 'react';
import { AuthContext } from '../../../App';

export function Login(){
    const {register, handleSubmit} = useForm();
    const auth = useContext(AuthContext);

    const submeterLogin = (login_data) =>{
        login(login_data).then((response)=>{
            auth.setAuth({ token: response.data.token, nome: response.data.nome});
            history.push("/");
        }).catch((error)=>{
            console.log(error);
        })
    }

    return(
        <form className="" onSubmit={handleSubmit(submeterLogin)}>
            <div className="cardlogin"> 
                <input type="text" className="cardcampo" id="email" placeholder="Digite o seu e-mail" {...register('email')}></input>
                <input type="password" className="cardcampo" id="senha" placeholder="Digite a sua senha" {...register('senha')}></input>
            </div>
            <button className="botaologinlogin">Login</button> 
            <NavLink 
                exact
                className="botaocadastro" 
                to="/cadastro">Cadastre-se
            </NavLink>
        </form>
    )
}

export function FormLogin(){
    return (<div className="pagina">
                <div className="container">
                    <Login></Login>
                </div>
            </div>
    )
}