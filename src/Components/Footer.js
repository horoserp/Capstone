import monoLogo from '../Images/Logo Mono.png';
import Nav from '../Components/Nav';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer className='container'>
            <div className='footer'/>
            <div className='footer'>
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
                            <span><FontAwesomeIcon icon={faFacebookF} /></span>
                            <span>Facebook</span>
                            <span><FontAwesomeIcon icon={faFacebookF} /></span>
                        </a>
                    </li>
                    <li>
                        <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <span><FontAwesomeIcon icon={faTwitter} /></span>
                            <span>Twitter</span>
                            <span><FontAwesomeIcon icon={faTwitter} /></span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <span><FontAwesomeIcon icon={faInstagram} /></span>
                            <span>Instagram</span>
                            <span><FontAwesomeIcon icon={faInstagram} /></span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='footer'/>
        </footer>
    );
}

export default Footer;