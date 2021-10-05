import './PaginaFeed.css';
import { LinhaDoTempo } from './LinhaDoTempo';
import { Nav } from '../../commom/Navegador/Navegador';
import { useContext, useEffect } from 'react';
import { listarPosts } from '../../../api/postsAPI';
import { AuthContext } from '../../../App';
import { useState } from 'react';

export function PaginaFeed(){
    const {auth} = useContext(AuthContext);
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        listarPosts(auth.token).then(
            (response) =>{
                setPosts(response.data);
            }
        ).catch(
            (error => {
                console.log(error);
            })
        )
    },[]);

    return (<div className="pagina">
                <div className="container">
                    <Nav></Nav>
                    <LinhaDoTempo posts={posts}></LinhaDoTempo>
                </div>
            </div>
            )
} 