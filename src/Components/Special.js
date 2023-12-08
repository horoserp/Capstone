import basket from "../Images/Basket.svg";
import "../App.css";

const Specials = ({ title, description, price, imageSrc }) => {
    return (
        <div style={{width: 300}}>
            <img
                src={imageSrc}
                alt={title}
                id={"card-image"}
            />
            <h3 style={{backgroundColor: "#EFEFEE"}}>
                {title}
                <span style={{float: "right"}}>
                    {price}
                </span>
            </h3>
            <p className={"card-p card-p-2"}>
                {description}
            </p>
            <p className={"card-p bold"}>
                Order for delivery
                <span>
                    <img
                        src={basket}
                        alt={"Basket icon"}
                        id={"basket-image"}
                    />
                </span>
            </p>
        </div>
    );
};

export default Specials;