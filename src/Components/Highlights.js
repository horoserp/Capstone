import Specials from "./Special";

const menuItems = [
    {
        getImageSrc: () => require("../Images/greek salad.jpg"),
        title: "Greek Salad",
        price: "$12.99",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    },
    {
        getImageSrc: () => require("../Images/bruchetta.jpg"),
        title: "Bruchetta",
        price: "$5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
    },
    {
        getImageSrc: () => require("../Images/lemon dessert.jpg"),
        title: "Lemon Dessert",
        price: "$5.00",
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
    }
];

function Highlights() {
    return (
        <section className="container pad">
            <h1 style={{paddingBottom: 75}}>This weeks specials!</h1>
            <button
                style={{marginBottom: 75}}
                onClick={ (e) => {
                    e.preventDefault();
                    window.location.href="/highlights";
                }}
            >
                Online Menu
            </button>
            <div className="container">
                {menuItems.map((menuItem) => (
                    <Specials
                        key={menuItem.title}
                        title={menuItem.title}
                        description={menuItem.description}
                        price={menuItem.price}
                        imageSrc={menuItem.getImageSrc()}
                    />
                ))}
            </div>
        </section>
    );
}

export default Highlights;