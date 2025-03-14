import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Loginpage from './pages/Loginpage';
import Robotspage from './pages/Robotspage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loginpage />} />
          <Route path='/robots' element={<Robotspage />} />
        </Routes>
        
      </BrowserRouter>
  );
}

export default App;