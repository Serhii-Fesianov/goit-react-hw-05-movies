import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzNiMmIzZTc4OTJhOGQ2OWNhNjg2Nzg4YzZlN2QyZiIsInN1YiI6IjY1YWE4MzE3NTM0NjYxMDEzM2NkNGVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BQl9G3IFrGVEVCyekmwitqV8V7MWpZhRwVxX4oXYHTY',
  },
});

export const getAllMovies = async () => {
  const { data } = await axiosInstance.get('trending/all/day?language=en-US');
  return data;
};

export const searchMovies = async query => {
  const { data } = await axiosInstance.get('search/movie', {
    params: { query: query },
  });
  return data;
};

export const getOneFilm = async id => {
  const { data } = await axiosInstance.get(`movie/${id}?language=en-US`);
  return data;
};

export const getOneCast = async id => {
  const { data } = await axiosInstance.get(
    `movie/${id}/credits?language=en-US`
  );

  return data.cast;
};

export const getReviews = async id => {
  const { data } = await axiosInstance.get(
    `movie/${id}/reviews?language=en-US`
  );

  return data.results;
};
