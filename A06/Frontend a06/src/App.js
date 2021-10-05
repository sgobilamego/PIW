import { PaginaFeed } from './components/pages/PaginaFeed/PaginaFeed';
import { PaginaPostar } from './components/pages/PaginaPostar/PaginaPostar';
import { PaginaLogin } from './components/pages/PaginaLogin/PaginaLogin';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import { PaginaCadastro } from './components/pages/PaginaCadastro/PaginaCadastro';
import { createContext, useState } from 'react';
import './App.css';
import history from './history';
import { Redirect } from 'react-router';

export const AuthContext = createContext(null);

function App() {

  const [auth, setAuth] = useState({token: null, nome:null });

  return (
    <AuthContext.Provider value={{ auth: auth, setAuth: setAuth}}>
      <Router history={history}>
        <Route exact path="/">
          {auth.token ==null? <Redirect to="/login"></Redirect> : <PaginaFeed></PaginaFeed>}
        </Route>
        <Route path="/posts">
          <PaginaPostar></PaginaPostar>
        </Route>
        <Route path="/login">
          <PaginaLogin></PaginaLogin>
        </Route>
        <Route path="/cadastro">
          <PaginaCadastro></PaginaCadastro>
        </Route>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
