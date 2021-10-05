import './PaginaFeed.css';
import { LinhaDoTempo } from './LinhaDoTempo';
import { Nav } from '../../commom/Navegador/Navegador';
import { FormPostar } from '../PaginaPostar/FormPostar';

export function PaginaFeed(){
    return (<div className="pagina">
                <div className="container">
                    <Nav></Nav>
                    <LinhaDoTempo></LinhaDoTempo>
                    <FormPostar></FormPostar>
                </div>
            </div>
            )
} 