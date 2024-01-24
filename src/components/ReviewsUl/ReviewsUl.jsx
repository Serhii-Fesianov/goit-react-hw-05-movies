import { Info, SmallTitle } from 'components/Reviews/Reviews.styled';
import React from 'react';
import { StyledItemReviews, StyledUlReviews } from './ReviewsUl.styled';

export const ReviewsUl = ({ reviews }) => {
  return (
    <StyledUlReviews>
      {reviews.map(review => {
        return (
          <StyledItemReviews key={review.id}>
            <SmallTitle>Author:{review.author}</SmallTitle>
            <Info>{review.content}</Info>
          </StyledItemReviews>
        );
      })}
    </StyledUlReviews>
  );
};
