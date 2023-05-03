import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
          <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/" element = {<Cards/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
