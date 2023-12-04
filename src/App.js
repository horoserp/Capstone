import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Reservations from './Components/Reservations';
import Details from './Components/Details';
import Confirmation from './Components/Confirmation';
import Menu from './Components/Menu';
import OrderOnline from './Components/OrderOnline';
import Login from './Components/Login';

function App() {
  return (
    <main>
      <Header/>
      <Footer/>

      <Reservations/>
      <Details/>
      <Confirmation/>

      <Menu/>
      <OrderOnline/>
      <Login/>
    </main>
  );
}

export default App;
