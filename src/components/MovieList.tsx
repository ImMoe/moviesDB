import { useEffect, useState } from 'react';
import apiService from '../services/api-service';
import { CanceledError } from 'axios';
import { SimpleGrid } from '@chakra-ui/react';
import MovieItem, { Movie } from './MovieItem';
import MovieSkeleton from './MovieSkeleton';

interface FetchMoviesResponse {
  count: number;
  results: Movie[];
}
const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(true);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    apiService
      .get<FetchMoviesResponse>('/movie/popular', {
        signal: controller.signal,
      })
      .then((res) => {
        setMovies(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
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
      {isLoading &&
        skeletons.map((skeleton) => <MovieSkeleton key={skeleton} />)}
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </SimpleGrid>
  );
};

export default MovieList;
