import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Accueil from './Accueil';
import Footer from './components/Footer';
import Crepes from './components/Crêpes'
import Boissons from './components/Boissons'
import Sandwichs from './components/Sandwichs';
import Petitdejeuner from './components/Petitdejeuner';
import Contact from './components/Contact'
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
 <GlobalStyle />
      <Hero />
 <Route  path="/" component= {Accueil} exact />
    <Route path="/crêpes-gaufres" component= {Crepes}  exact />
    <Route path="/sandwichs" component= {Sandwichs}  exact />
    <Route path="/jus naturels-et-autres boissons" component= {Boissons}  exact />
    <Route path="/petit-dejeuner" component= {Petitdejeuner}  exact />
    <Route path="/contact" component= {Contact}  exact />
          <Footer />
    </Router>
  );
}

export default App;
