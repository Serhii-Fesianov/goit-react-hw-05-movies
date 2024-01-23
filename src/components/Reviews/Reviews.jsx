import React, { useEffect, useState } from 'react';

import { getReviews } from 'Services';
import { useParams } from 'react-router-dom';
import { ReviewsUl } from 'components/ReviewsUl/ReviewsUl';

const Reviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(moviesId)
      .then(response => setReviews(response))
      .catch(error => console.log(error));
  }, [moviesId]);
  return (
    <>
      {reviews.length > 0 ? <ReviewsUl reviews={reviews} /> : <p>No reviews</p>}
    </>
  );
};

export default Reviews;
