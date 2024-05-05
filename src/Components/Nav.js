import { Link } from 'react-router-dom';
import logo from '../Images/Logo.svg';

function Nav() {
    return (
        <nav className='container'>
            <img src={logo} alt={"Little Lemon Logo"} />
            <Link to="/" onClick={() => window.scrollTo(0,0)}>Homepage</Link>
            <Link to="/about" onClick={() => window.scrollTo(0,0)}>About</Link>
            <Link to="/highlights" onClick={() => window.scrollTo(0,0)}>Menu</Link>
            <Link to="/reservations" onClick={() => window.scrollTo(0,0)}>Reservations</Link>
            {/* <Link to="/orderonline" onClick={() => window.scrollTo(0,0)}>Order Online</Link> */}
            <Link to="login" onClick={() => window.scrollTo(0,0)}>Login</Link>
        </nav>
    );
}

export default Nav;