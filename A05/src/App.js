import { BrowserRouter, Route } from 'react-router-dom';
import { PaginaFeed } from './components/pages/PaginaFeed/PaginaFeed';
import { PaginaPostar } from './components/pages/PaginaPostar/PaginaPostar';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Route exact path="/">
          <PaginaFeed></PaginaFeed>
        </Route>
        <Route path="/posts">
          <PaginaPostar></PaginaPostar>
        </Route>
      </BrowserRouter>
  );
}

export default App;
