import { useNavigate } from "react-router-dom";
import Reservations from "./Reservations";

function Confirmation() {

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate("/highlights");
        window.scrollTo(0,0);
    }

    return (
        <>
            <Reservations>Success!</Reservations>
            <div className="highlight-b pad">
                <div className="container flex-dir">
                    <h2 style={{margin: 0}}>Contratulations!</h2>
                    <h3>Reservation Successful</h3>
                    <p className="center">You will receive an email confirmation shortly.<br />
                        If you need to make changes to your reservation, please call us directly.<br />
                        We look forward to your visit with us!
                    </p>
                    <button onClick={handleClick}>Explore Our Menu</button>
                </div>
            </div>
        </>
    );
}

export default Confirmation;