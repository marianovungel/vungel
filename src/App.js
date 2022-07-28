import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {useContext} from 'react'
import {Context} from './Context/Context'
import Venda from './pages/Venda/Venda'
import Login from './pages/Login/Login'
import Registrar from './pages/Registrar/Registrar'
import SingleVenda from './pages/SingleVenda/SingleVenda';
import SingleDesapego from './pages/SingleDesapego/SingleDesapego';
import Desapego from './pages/Desapego/Desapego';
import Aluguel from './pages/Aluguel/Aluguel';
import Compartilhar from './pages/Compartilhar/Compartilhar';
import CadastrarAluguel from './pages/CadastrarAluguel/CadastrarAluguel';
import CadastrarCompartilhar from './pages/CadastrarCompartilhar/CadastrarCompartilhar';
import SingleAluguel from './pages/SingleAluguel/SingleAluguel';
import SingleCompartilhar from './pages/SingleCompartilhar/SingleCompartilhar';
import Sobre from './pages/Sobre/Sobre';
import EditAluguel from './pages/EditAluguel/EditAluguel';
import EditCompartilhar from './pages/EditCompartilhar/EditCompartilhar';
import Exe from './pages/exe/Exe';
import ExeComp from './pages/ExeComp/ExeComp';

function App() {

  const {user} = useContext(Context);

  return (
      <Router basename='/tothepoint_login/'>
        <Switch> 
          <Route path="/" component={ user ? Venda : Login} exact />
          <Route path="/desapego" component={ user ? Desapego : Login} exact />
          <Route path="/habitacao-aluguel" component={ user ? Aluguel : Login} exact />
          <Route path="/habitacao/aluguel/:id" component={ user ? SingleAluguel : Login} exact />
          <Route path="/aluguel-edit/:id" component={ user ? EditAluguel : Login} exact />
          <Route path="/compartilhar-edit/:id" component={ user ? EditCompartilhar : Login} exact />
          <Route path="/aluguel-cadastrando" component={ user ? CadastrarAluguel : Login} exact />
          <Route path="/habitacao-compartilhar" component={ user ? Compartilhar : Login} exact />
          <Route path="/habitacao/compartilhar/:id" component={ user ? SingleCompartilhar : Login} exact />
          <Route path="/compartilhar-cadastrar" component={ user ? CadastrarCompartilhar : Login} exact />
          <Route path="/post/:id" component={user ? SingleVenda  : Login} />
          <Route path="/desapego/:id" component={user ? SingleDesapego  : Login} />
          <Route path="/exe" component={user ? Exe  : Login} />
          <Route path="/execomp" component={user ? ExeComp  : Login} />
          <Route path="/login" component={Login} />
          <Route path="/sobre" component={Sobre} />
          <Route path="/registrar" component={Registrar} />
        </Switch>
      </Router>
  );
}

export default App;