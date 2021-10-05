import './PaginaCadastro.css';
import history from "../../../history";
import { useForm } from 'react-hook-form';
import { cadastro } from "../../../api/auth";

export function FormCadastro(){
    return (<div className="pagina">
                <div className="container">
                    <Cadastro></Cadastro>
                </div>
            </div>
    )
}

function Cadastro(){
    const {register, handleSubmit} = useForm();
    const submeterUser = (user) =>{
        cadastro(user).then((response)=>{
            console.log(response);
            history.push("/login");
        }).catch((error)=>{
            console.log(error);
        })
    };

    return(
        <form className="cardcadastro" onSubmit={handleSubmit(submeterUser)}>
            <input type="text" className="cardcampo" id="nome" placeholder="Qual o seu nome?" {...register('nome')}></input>
            <input type="text" className="cardcampo" placeholder="Qual o seu email?" {...register('email')}></input>
            <input type="password" className="cardcampo" placeholder="Escolha uma boa senha" {...register('senha')}></input>
            <button className="botaoenviarcadastro">Enviar</button> 
        </form>
    )
}