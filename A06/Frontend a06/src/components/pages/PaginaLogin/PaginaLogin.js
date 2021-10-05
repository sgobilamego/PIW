import './PaginaLogin.css';
import { Nav } from '../../commom/Navegador/Navegador';
import { FormLogin } from './FormLogin';

export function PaginaLogin (){
    return (<div className="pagina">
                <div className="container">
                    <Nav></Nav>
                    <FormLogin></FormLogin>
                </div>
            </div>
    )
}