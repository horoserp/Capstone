import Hero from './Hero';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';

function Homepage() {
    return (
        <section>
            <Hero/>
            <Highlights/>
            <Testimonials/>
            <About/>
        </section>
    )
}

export default Homepage;