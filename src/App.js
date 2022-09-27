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
import EditAluguel from './pages/EditAluguel/EditAluguel';
import EditCompartilhar from './pages/EditCompartilhar/EditCompartilhar';
import Exe from './pages/exe/Exe';
import ExeComp from './pages/ExeComp/ExeComp';
import SendEmail from './pages/SendEmail/SendEmail';
import UserPage from './pages/UserPage/UserPage';
import Vida from './pages/Vida/Vida';
import NewSobre from './pages/Sobre/NewSobre';
import Visto from './pages/Visto/Visto';
import Intercampi from './pages/Intercampi/Intercampi';

function App() {

  const {user} = useContext(Context);

  return (
      <Router>
        <Switch> 
          <Route path="/" component={ user ? Vida : Login} exact />
          <Route path="/venda" component={ user ? Venda : Login} exact />
          <Route path="/doacao" component={ user ? Desapego : Login} exact />
          {/* esta rota de aluguel é inacessível */}
          <Route path="/exe" component={ user ? Aluguel : Login} exact />
          <Route path="/execomp" component={user ? ExeComp  : Login} exact />
          {/*Esta outa de compartilhamento é inacessível também */}
          <Route path="/habitacao/aluguel/:id" component={ user ? SingleAluguel : Login} exact />
          <Route path="/aluguel-edit/:id" component={ user ? EditAluguel : Login} exact />
          <Route path="/compartilhar-edit/:id" component={ user ? EditCompartilhar : Login} exact />
          <Route path="/aluguel-cadastrando" component={ user ? CadastrarAluguel : Login} exact />
          <Route path="/habitacao-compartilhar" component={ user ? Compartilhar : Login} exact />
          <Route path="/habitacao/compartilhar/:id" component={ user ? SingleCompartilhar : Login} exact />
          <Route path="/compartilhar-cadastrar" component={ user ? CadastrarCompartilhar : Login} exact />
          <Route path="/post/:id" component={user ? SingleVenda  : Login} exact />
          <Route path="/doacao/:id" component={user ? SingleDesapego  : Login} exact />
          <Route path="/habitacao-aluguel" component={user ? Exe  : Login} exact />
          <Route path="/user" component={user ? UserPage  : Login} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/sendemail" component={SendEmail} exact />
          <Route path="/sobre" component={NewSobre} exact />
          <Route path="/visto" component={Visto} exact />
          <Route path="/intercampi" component={Intercampi} exact />
          <Route path="/registrar" component={Registrar} exact />
        </Switch>
      </Router>
  );
}

export default App;