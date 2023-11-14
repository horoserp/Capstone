import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Highlights from './Components/Highlights';
import Testimonials from './Components/Testimonials';
import About from './Components/About';
import Footer from './Components/Footer';
import Reservations from './Components/Reservations';
import Details from './Components/Details';
import Confirmation from './Components/Confirmation';
import Menu from './Components/Menu';
import OrderOnline from './Components/OrderOnline';
import Login from './Components/Login';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <main>
        <Header/>
        <Hero/>
        <Highlights/>
        <Testimonials/>
        <About/>
        <Footer/>

        <Reservations/>
        <Details/>
        <Confirmation/>

        <Menu/>
        <OrderOnline/>
        <Login/>
      </main>
    </ChakraProvider>
  );
}

export default App;
