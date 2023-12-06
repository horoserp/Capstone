import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import About from './Components/About';
import Highlights from './Components/Highlights';
import Reservations from './Components/Reservations';
import OrderOnline from './Components/OrderOnline';
import Login from './Components/Login';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main>
      <Nav/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/highlights" element={<Highlights />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/orderonline" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </main>
  );
}

export default App;
