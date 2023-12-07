import Hero from './Hero';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';

function Homepage() {
    return (
        <>
            <div className='primary-b'>
                <Hero/>
            </div>
            <Highlights/>
            <Testimonials/>
            <About/>
        </>
    )
}

export default Homepage;