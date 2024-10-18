import React from "react";
import TestimonialCard from "./TestimonialCard";
import profile1 from "../icons_assets/Sabrina.jpg"
import profile2 from "../icons_assets/Jerry.jpg"
import profile3 from "../icons_assets/Rachel.jpg"
import profile4 from "../icons_assets/George.jpg"

const Testimonial = () =>  {
    return (
        <>
            <div className="testimonials">
                <div className="testimonials-header">
                    <h2>Customer Reviews</h2>
                </div>
                <div className="testimonials-cards-section">
                <TestimonialCard
                    profileUrl={profile1}
                    name="Sabrina"
                    rating={5}
                    feedback="Great food and customer service. Would recommend!"
                />
                <TestimonialCard
                    profileUrl={profile2}
                    name="Jerry"
                    rating={4}
                    feedback="Amazing service and a great variety of dishes. Will definitely come back."
                />
                <TestimonialCard
                    profileUrl={profile3}
                    name="Rachel"
                    rating={4}
                    feedback="Outstanding flavors! The staff was friendly and attentive."
                />
                <TestimonialCard
                    profileUrl={profile4}
                    name="George"
                    rating={5}
                    feedback="Delicious food and cozy ambiance. Loved the experience!"
                />
            </div>
            </div>
        </>
    )
}

export default Testimonial;