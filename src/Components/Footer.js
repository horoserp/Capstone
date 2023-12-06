import monoLogo from '../Images/Logo Mono.png';
import Nav from '../Components/Nav';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer >
            <img src={monoLogo} alt="Little Lemon white logo"/>
            <Nav/>
            <ul>
                <li>123 Fake St.</li>
                <li>Chicago, IL   60601</li>
                <li>(312) 555-4382</li>
                <li><a href="mailto: contact@littlelemon.com" target="_blank" rel="noopener noreferrer">contact@littlelemon.com</a></li>
            </ul>
            <ul>
                <li>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookF} />
                        <span>Facebook</span>
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                </li>
                <li>
                    <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                        <span>Twitter</span>
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                        <span>Instagram</span>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;