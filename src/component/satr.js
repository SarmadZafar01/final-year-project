// StarRating.js
import React, { useState } from 'react';
import './satr.css'; // Create a separate CSS file for styling

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="star-rating">
    <div className="rating">
    Rate Your Experience
    </div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? 'star filled' : 'star'}
          onClick={() => handleStarClick(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
