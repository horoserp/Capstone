import owners from "../Images/Mario and Adrian A.jpg";
import owners2 from "../Images/Mario and Adrian b.jpg";

function About() {
    return(
        <>
            <h1 className="center">About Us</h1>
            <section className="container pad">
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit.
                    </p>
                </div>
                <div>
                    <img
                        src={owners}
                        alt={"Mario and Adrian talking over prep counter"}
                        className="about-image over"
                    />
                    <img
                        src={owners2}
                        alt={"Mario and Adrian smiling and laughing in kitchen"}
                        className="about-image under"
                    />
                </div>
            </section>
        </>
    );
}

export default About;