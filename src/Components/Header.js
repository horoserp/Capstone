import Nav from './Nav';
import logo from '../Images/Logo.svg';

function Header() {
    return (
        <header className='container'>
            <img src={logo} alt={"Little Lemon Logo"} />
            <Nav/>
        </header>
    );
}

export default Header;