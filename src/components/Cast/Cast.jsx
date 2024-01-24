import { getOneCast } from 'Services';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Info, SmallHead } from './Cast.styled';

const Cast = () => {
  const { moviesId } = useParams();
  const [cast, setCast] = useState([]);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

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
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                  : defaultImg
              }
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

export default Cast;
