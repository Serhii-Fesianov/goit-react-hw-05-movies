import { getOneCast } from 'Services';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Info, SmallHead } from './Cast.styled';

export const Cast = () => {
  const { moviesId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getOneCast(moviesId)
      .then(response => setCast(response))
      .catch(error => console.log(error));
  }, [moviesId]);
  console.log(cast);
  return (
    <ul>
      {cast.map(item => {
        return (
          <li key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
              alt={item.name}
              width={150}
            />
            <SmallHead>{item.name}</SmallHead>
            <Info>Character:{item.character}</Info>
          </li>
        );
      })}
    </ul>
  );
};
