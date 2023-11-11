import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import ShowData from './component/ShowData';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path ="/add" element = {<h1>Add Expenses</h1>}/>
        <Route path = "/" element = {<ShowData/>}/>
      </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
