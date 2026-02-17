import axios from 'axios';
import { Movie } from '../types/movie';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

interface MoviesResponse {
  results: Movie[];
}

export const fetchMovies = async (
  query: string
): Promise<Movie[]> => {
  const response = await axios.get<MoviesResponse>(
    `${BASE_URL}/search/movie`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        query,
      },
    }
  );

  return response.data.results;
};