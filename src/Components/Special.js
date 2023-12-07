import basket from "../Images/Basket.svg";

const Specials = ({ title, description, price, imageSrc }) => {
    return (
        <div style={{width: 300}}>
            <img
                src={imageSrc}
                alt={title}
                style={{
                    width: 300,
                    height: 250,
                    borderRadius: "16px 16px 0 0",
                    marginBottom: "-5px",
                }}
            />
            <h3 style={{backgroundColor: "#EFEFEE"}}>
                {title}
                <span style={{float: "right"}}>
                    {price}
                </span>
            </h3>
            <p style={{
                height: 150,
                backgroundColor: "#EFEFEE",
                padding: "0 20px 25px 20px",
                marginBottom: 0,
                }}
            >
                {description}
            </p>
            <p style={{
                backgroundColor: "#EFEFEE",
                padding: "0 20px 25px 20px",
                fontWeight: "bold",
                }}
            >
                Order for delivery
                <span>
                    <img
                        src={basket}
                        alt={"Basket icon"}
                        style={{
                            height: 20,
                            float: "right",
                            paddingTop: 3,
                        }}
                    />
                </span>
            </p>
        </div>
    );
};

export default Specials;