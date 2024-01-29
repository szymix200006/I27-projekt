import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react';
import FillFlights from './pages/FillFlights'
import Browser from './pages/Browser'
import FillResults from './pages/FillResults'
import BrowserResults from './pages/BrowserResults'
import Menu from './components/Menu'
import './styles/App.css';

function App() {
  return (
    <div className='app-container'>
    <BrowserRouter>
    <Menu routes={['','browser']}/>
      <Routes>
        <Route exact path='/' element={<FillFlights/>} />
        <Route path='browser' element={<Browser/>} />
        <Route path='fillResult' element={<FillResults/>} />
        <Route path='browserResult' element={<BrowserResults/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
//<React.StrictMode>
// </React.StrictMode>