import { getOneFilm } from 'Services';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import {
  Box,
  ImgDetails,
  Info,
  ListLink,
  SmallHead,
  SmallTitle,
  StyledLinkMovies,
  Title,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { moviesId } = useParams();
  const back = useLocation();

  const [film, setFilm] = useState(null);

  useEffect(() => {
    getOneFilm(moviesId)
      .then(response => setFilm(response))
      .catch(error => console.log(error));
  }, [moviesId]);

  return (
    <>
      {film && (
        <section>
          <Box>
            <Link to={back.state ? back.state.from : '/'}> Back</Link>
            <ImgDetails
              src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              alt={film.title}
            />
            <Title>{film.title}</Title>
            <Info>Viewer rating:{film.vote_average}</Info>
            <SmallTitle>Overview</SmallTitle>
            <Info>{film.overview}</Info>
            <SmallHead>Genres</SmallHead>
            <Info>{film.genres.map(genre => genre.name).join(', ')}</Info>
            <ListLink>
              <li>
                <StyledLinkMovies to="cast">Cast</StyledLinkMovies>
              </li>
              <li>
                <StyledLinkMovies to="reviews">Reviews</StyledLinkMovies>
              </li>
            </ListLink>
          </Box>
          <Outlet />
        </section>
      )}
    </>
  );
};

export default MovieDetails;
