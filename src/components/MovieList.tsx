import { useEffect, useState } from 'react';
import apiService from '../services/api-service';
import { CanceledError } from 'axios';
import { SimpleGrid } from '@chakra-ui/react';
import MovieItem, { Movie } from './MovieItem';

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
  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
        lg: 3,
        xl: 4,
      }}
      spacing={8}
    >
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </SimpleGrid>
  );
};

export default MovieList;
