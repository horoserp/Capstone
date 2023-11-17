import monoLogo from '../Images/Logo Mono.png';
import Nav from '../Components/Nav';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer>
            <img src={monoLogo} alt="Little Lemon white logo"/>
            <Nav/>
            <p>
                123 Fake St.
                Chicago, IL   60601
                (312) 555-4382
            </p>
            <a href="mailto: contact@littlelemon.com" target="_blank" rel="noopener noreferrer">contact@littlelemon.com</a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
                <p>Facebook</p>
                <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
                <p>Twitter</p>
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
                <p>Instagram</p>
                <FontAwesomeIcon icon={faInstagram} />
            </a>
        </footer>
    );
}

export default Footer;