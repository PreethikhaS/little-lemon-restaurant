import React from "react";
import StarRating from "./StarRating";

const TestimonialCard = ({ profileUrl, name, rating, feedback }) => {
    return (
        <div className="testimonial-card">
            <img src={profileUrl} className="testimonial-card-image" />
            <h2 className="testimonial-name">{name}</h2>
            <StarRating rating={rating} />
            <h4 className="testimonial-feedback"><q>{feedback}</q></h4>
        </div>
    )
}

export default TestimonialCard;