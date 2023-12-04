import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import About from './About';

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
                    <li className="flex"><a href="">Menu</a></li>
                    <li className="flex"><a href="">Reservations</a></li>
                    <li className="flex"><a href="">Order Online</a></li>
                    <li className="flex"><a href="">Login</a></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
}

export default Nav;