import React, { useEffect } from "react";
const AverageRating = ({ ratings }) => {
    const totalRating = ratings.reduce((sum, rating) => sum + rating.rate, 0);
    const averageRating = Math.round(totalRating / ratings.length);
  
    const filledStars = '★'.repeat(averageRating);
    const emptyStars = '☆'.repeat(5 - averageRating);
  
    return (
      <div className="ratings__average">
        <h3>Average Rating</h3>
        <div>
          {filledStars.split('').map((star, index) => (
            <span key={index}>{star}</span>
          ))}
          {emptyStars.split('').map((star, index) => (
            <span key={5 + index}>{star}</span>
          ))}
        </div>
      </div>
    );
  };
  
  export default AverageRating;