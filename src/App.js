import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import About from './Components/About';
import Highlights from './Components/Highlights';
import Reservations from './Components/Reservations';
import OrderOnline from './Components/OrderOnline';
import Login from './Components/Login';
import Confirmation from './Components/Confirmation';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/highlights" element={<Highlights />} />
        <Route path="/reservations" element={<Reservations renderButton={true}>(Step 1 of 2)</Reservations>} />
        <Route path="/orderonline" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      <Homepage/>
      <div className='primary-b'>
        <Footer/>
      </div>
    </main>
  );
}

export default App;
