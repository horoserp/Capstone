import { Link } from 'react-router-dom';
import logo from '../Images/Logo.svg';

function Nav() {
    return (
        <nav className='container'>
            <img src={logo} alt={"Little Lemon Logo"} />
            <Link to="/">Homepage</Link>
            <Link to="/about">About</Link>
            <Link to="/highlights">Menu</Link>
            <Link to="/reservations">Reservations</Link>
            <Link to="/orderonline">Order Online</Link>
            <Link to="login">Login</Link>
        </nav>
    );
}

export default Nav;