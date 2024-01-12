import {BrowserRouter as Router, Link } from 'react-router-dom'
import "./App.css";

import Footer from './components/layout/Footer';



function App() {
 return (
  <Router>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/empresa">Empresa</Link></li>
      <li><Link to="/contato">Contato</Link></li>
      </ul>


    
      <Footer />
  </Router>
 )
  
}

export default App;
