import { Info, SmallTitle } from 'components/Reviews/Reviews.styled';
import React from 'react';

export const ReviewsUl = ({ reviews }) => {
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
