import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {useContext} from 'react'
import {Context} from './Context/Context'


import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Portefolio from './pages/Portefolio/Portefolio';

function App() {

  const {user} = useContext(Context);

  return (
      <Router>
        <Switch> 
          <Route path="/" component={ Home } exact />
          <Route path="/about" component={ About } exact />
          <Route path="/contact" component={ Contact } exact />
          <Route path="/portefolio" component={ Portefolio } exact />
        </Switch>
      </Router>
  );
}

export default App;