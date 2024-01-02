import { useNavigate } from "react-router-dom";
import backButton from "../Images/circle-arrow-left-solid.svg";

function BackButton () {
    let navigate = useNavigate();
    return (
        <>
            <button id="back-button">
                <img
                    src={backButton}
                    alt={"Left pointing arrow"}
                    id="icon"
                    onClick={() => navigate(-1)}
                />
            </button>
        </>
    )
}

export default BackButton;