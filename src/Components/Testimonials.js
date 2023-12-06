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
        <section>
            <h1>Testimonials</h1>
            <div style={{gap: "0 50px"}}>
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