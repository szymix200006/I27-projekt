import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import Browser from './pages/Browser';
import Profile from './pages/Profile';
import Seats from './pages/Seats';
import Checkout from './pages/Checkout';

function App() {

  return (
    <div className='app-container'>
      <BrowserRouter>
        <Menu paths={['browser', 'profile']}/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='browser' element={<Browser/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='seats' element={<Seats/>}/>
          <Route path='checkout' element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
