import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainForm from './pages/MainForm';
import './App.css';

function App() {
  return (
    <div style={{background: 'linear-gradient(to right, white , grey)', height: '100vh', overflow: 'auto'}}>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainForm/>} />
        </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
