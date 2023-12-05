import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <nav>
                <ul>
                    <li className="flex">
                        <Link to="/">Homepage</Link>
                    </li>
                    <li className="flex">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="flex">
                        <Link to="/highlights">Menu</Link>
                    </li>
                    <li className="flex">
                        <Link to="/reservations">Reservations</Link>
                    </li>
                    <li className="flex">
                        <Link to="/orderonline">Order Online</Link>
                    </li>
                    <li className="flex">
                        <Link to="login">Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;