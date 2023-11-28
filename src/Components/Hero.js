import heroImage from '../Images/restauranfood.jpg'

function Hero() {
    return (
        <section className='container'>
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button>Reserve a Table</button>
            </div>
            <img src={heroImage} alt={"Waiter holding tray of food"} />
        </section>
    );
}

export default Hero;