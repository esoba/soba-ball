import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Matchup1 from './components/pages/Matchup1';
import Matchup2 from './components/pages/Matchup2';
import Matchup3 from './components/pages/Matchup3';
import Matchup4 from './components/pages/Matchup4';
import Matchup5 from './components/pages/Matchup5';
import Matchup6 from './components/pages/Matchup6';
import Matchup7 from './components/pages/Matchup7';
import Matchup8 from './components/pages/Matchup8';
import Matchup9 from './components/pages/Matchup9';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path = '/' exact element = {<Home/>} />
        <Route path = '/about' exact element = {<About/>} />
        <Route path = '/matchup-1' exact element = {<Matchup1/>} />
        <Route path = '/matchup-2' exact element = {<Matchup2/>} />
        <Route path = '/matchup-3' exact element = {<Matchup3/>} />
        <Route path = '/matchup-4' exact element = {<Matchup4/>} />
        <Route path = '/matchup-5' exact element = {<Matchup5/>} />
        <Route path = '/matchup-6' exact element = {<Matchup6/>} />
        <Route path = '/matchup-7' exact element = {<Matchup7/>} />
        <Route path = '/matchup-8' exact element = {<Matchup8/>} />
        <Route path = '/matchup-9' exact element = {<Matchup9/>} />
      </Routes>
    </Router>
  );
}

export default App;
