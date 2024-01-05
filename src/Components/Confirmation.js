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
            <Reservations renderButton={false}>Success!</Reservations>
            <div className="highlight-b pad">
                <div className="container flex-dir">
                    <h1 style={{margin: 0}}>Contratulations!</h1>
                    <h2>Reservation Successful</h2>
                    <span className="center">You will receive an email confirmation shortly.<br />
                        If you need to make changes to your reservation, please call us directly.<br />
                        We look forward to your visit with us!
                    </span>
                    <button onClick={handleClick} style={{marginTop: 30}}>Explore Our Menu</button>
                </div>
            </div>
        </>
    );
}

export default Confirmation;