import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from 'react-query';
import Menu from './components/Menu';
import Home from './pages/Home';
import Browser from './pages/Browser';
import Profile from './pages/Profile';
import Seats from './pages/Seats';
import Checkout from './pages/Checkout';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  )
}

export default App
