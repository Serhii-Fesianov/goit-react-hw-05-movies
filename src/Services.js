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

export const getOneFilm = async id => {
  console.log(id);
  const { data } = await axiosInstance.get(`movie/${id}?language=en-US`);
  return data;
};
