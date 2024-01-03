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
            <p>
                Contratulations!<br />
                Reservation Successful<br />
                You will receive an email confirmation shortly.<br />
                If you need to make changes to your reservation, please call us directly.<br />
                We look forward to your visit with us!
            </p>
            <button onClick={handleClick}>Explore Our Menu</button>
        </>
    );
}

export default Confirmation;