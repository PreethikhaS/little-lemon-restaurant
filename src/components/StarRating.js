import React from "react";

const StarRating = ({rating}) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className={i <= rating ? 'star-filled' : 'star-empty'}>
                    ★
                </span>
            );        
        }
        return stars;
    };
    return <div className="star-rating">{renderStars()}</div>
}

export default StarRating;