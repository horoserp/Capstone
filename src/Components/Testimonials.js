import ReviewCard from "./ReviewCard";

const reviews = [
    {
        rating: "5",
        getImageSrc: () => require("../Images/test1.jpg"),
        name: "Ralph",
        comment: "Superb!"
    },
    {
        rating: "5",
        getImageSrc: () => require("../Images/test2.jpg"),
        name: "Georgio",
        comment: "The absolute best!"
    },
    {
        rating: "5",
        getImageSrc: () => require("../Images/test4.jpg"),
        name: "Sylvester",
        comment: "Can't. Be. Beat."
    },
    {
        rating: "5",
        getImageSrc: () => require("../Images/test5.jpg"),
        name: "Frank",
        comment: "Don't go anywhere else!"
    }
];

function Testimonials() {
    return(
        <section className="pad">
            <h1 style={{textAlign: "center", paddingBottom: 75, color: "#EDEFEE"}}>Testimonials</h1>
            <div className="container">
                {reviews.map((review) => (
                    <ReviewCard
                        key={review.name}
                        rating={review.rating}
                        imageSrc={review.getImageSrc()}
                        name={review.name}
                        comment={review.comment}
                    />
                ))}
            </div>
        </section>
    );
}

export default Testimonials;