import axios from 'axios';
import type { Movie } from '../types/movie';


const BASE_URL = 'https://api.themoviedb.org/3';

const token = import.meta.env.VITE_TMDB_TOKEN;

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
  params: {
    language: 'en-US',
  },
};

interface TMDBResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export async function fetchMovies(query: string): Promise<Movie[]> {
      const response = await axios.get<TMDBResponse>(
      `${BASE_URL}/search/movie`,
      {
        ...config,
        params: {
          ...config.params,
          query,
        },
      }
    );
    return response.data.results;
}
  
