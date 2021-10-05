import './PaginaPostar.css';
import { Nav } from '../../commom/Navegador/Navegador';
import { FormPostar } from './FormPostar';

export function PaginaPostar (){
    return (<div className="pagina">
                <div className="container">
                    <Nav></Nav>
                    <FormPostar></FormPostar>
                </div>
            </div>
    )
}