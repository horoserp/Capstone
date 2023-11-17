import Nav from './Nav';
import logo from '../Images/Logo.svg';

function Header() {
    return (
        <header className='container'>
            <div className='header' />
            <div className='header'>
                <img src={logo} alt={"Little Lemon Logo"} />
                <Nav/>
            </div>
            <div className='header' />
        </header>
    );
}

export default Header;