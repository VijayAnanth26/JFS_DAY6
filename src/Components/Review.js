import React, { useState } from 'react';
import "../Assets/css/Review.css"
import Navbar from './NavBar';
const Review = ({ rating, comment }) => {
  return (
    <div className="review">
      <p className="rating">Rating: {rating}</p>
      <p className="comment">{comment}</p>
    </div>
  );
};

const RatingsAndReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value));
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleAddReview = () => {
    const newReview = {
      rating,
      comment,
    };

    setReviews([...reviews, newReview]);
    setRating(0);
    setComment('');
  };

  return (
    <div>
      <div>
<Navbar/>
      </div>
      <div className="ratings-and-reviews">
      <h2>Ratings and Reviews</h2>
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <Review key={index} rating={review.rating} comment={review.comment} />
        ))}
      </div>
      <div className="add-review">
        <label htmlFor="rating">Rating:</label>
        <select id="rating" value={rating} onChange={handleRatingChange}>
          <option value={0}>Select rating</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <label htmlFor="comment">Comment:</label>
        <textarea id="comment" value={comment} onChange={handleCommentChange} placeholder="Enter your comment..." />
        
        <button onClick={handleAddReview} >
    <span class="box">
      Add Review
    </span>
</button>
      </div>
    </div>
    </div>
  );
};

export default RatingsAndReviews;
