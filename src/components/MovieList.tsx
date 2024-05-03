import { useEffect, useState } from 'react';
import apiService from '../services/api-service';
import { CanceledError } from 'axios';

interface Movie {
  id: number;
  original_title: string;
}
interface FetchMoviesResponse {
  count: number;
  results: Movie[];
}
const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState('');
  useEffect(() => {
    const controller = new AbortController();
    apiService
      .get<FetchMoviesResponse>('/movie/popular', {
        signal: controller.signal,
      })
      .then((res) => setMovies(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => {
      controller.abort();
    };
  }, []);
  if (error) return <h2>{error}</h2>;
  return <div>MovieList</div>;
};

export default MovieList;
