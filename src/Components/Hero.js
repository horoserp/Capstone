import heroImage from '../Images/restauranfood.jpg'

function Hero() {
    return (
        <section className='container'>
            <div>
                <h1 className='secondary'>Little Lemon</h1>
                <h2 className='highlight'>Chicago</h2>
                <p className='highlight'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button>Reserve a Table</button>
            </div>
            <img className='hero' src={heroImage} alt={"Waiter holding tray of food"} />
        </section>
    );
}

export default Hero;