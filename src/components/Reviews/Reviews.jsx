import React, { useEffect, useState } from 'react';

import { getReviews } from 'Services';
import { useParams } from 'react-router-dom';
import { Info, SmallTitle } from './Reviews.styled';

export const Reviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(moviesId)
      .then(response => setReviews(response))
      .catch(error => console.log(error));
  }, [moviesId]);
  return (
    <ul>
      {reviews.map(review => {
        return (
          <li key={review.id}>
            <SmallTitle>Author:{review.author}</SmallTitle>
            <Info>{review.content}</Info>
          </li>
        );
      })}
    </ul>
  );
};
