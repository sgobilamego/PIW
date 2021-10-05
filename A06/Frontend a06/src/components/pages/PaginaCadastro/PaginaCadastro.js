import './PaginaCadastro.css';
import { Nav } from '../../commom/Navegador/Navegador';
import { FormCadastro } from './FormCadastro';

export function PaginaCadastro (){
    return (<div className="pagina">
                <div className="container">
                    <Nav></Nav>
                    <FormCadastro></FormCadastro>
                </div>
            </div>
    )
}