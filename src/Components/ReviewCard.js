import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ReviewCard = ({ rating, imageSrc, name, comment }) => {
    return (
        <div className="review">
            <h3>
                {rating}
                <FontAwesomeIcon
                    icon={faStar}
                    style={{
                        height: 20,
                        paddingBottom: 1,
                        paddingLeft: 5,
                        color: "#f4c314",}}
                />
            </h3>
            <br></br>
            <div style={{}}>
                <img src={imageSrc} alt={name} style={{width: 75, height: 75}} />
                <span style={{paddingLeft: "15px", position: "relative", top: "-30px"}}>{name}</span>
            </div>
            <br></br>
            <p>{comment}</p>
        </div>
    );
};

export default ReviewCard;