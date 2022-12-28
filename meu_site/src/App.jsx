import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import Home from './paginas/Home/Home'
import Home_2 from './paginas/Home/Home_2'
import Home_3 from './paginas/Home/Home_3'
import Projeto from './paginas/Projeto/Projeto';
import Sobre from './paginas/Sobre/Sobre';
import Sobre_2 from './paginas/Sobre/Sobre_2';

import Contato from './paginas/Contato/Contato'
import NavBar from './Components/NavBar'; 
import Redes from './Components/Redes'; 

import './App.css'
import nav from './Components/nav';
import Button from './paginas/Home/Button';
import cards from './paginas/Projeto/cards';


const App = () => {
  return (
        <Router>

        <Route path='/home' component={Home}   />
        <Route path='/Home' component={Home_3}   />
        <Route path='/Home' component={Button}   />
        <Route path='/Sobre' component={Sobre}   />

        <Route path='/projetos' component={cards}   />

        <Route path='/contato' component={Projeto}   />
        <Route path='/Sobre' component={Sobre_2}   />






        <Route path='/'  component={NavBar}   />
        

       
     
        

        </Router>
   
   
  )
    
}

export default App