import basket from "../Images/Basket.svg";

const Specials = ({ title, description, price, imageSrc }) => {
    return (
        <div className="card">
            <img src={imageSrc} alt={title} style={{width: 425}}/>
            <h3>
                {title}
                <span>
                    {price}
                </span>
            </h3>
            <p>
                {description}
                <span>
                    <img src={basket} alt={"Basket icon"} />
                </span>
            </p>
        </div>
    );
};

export default Specials;