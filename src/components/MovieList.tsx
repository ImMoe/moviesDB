import { SimpleGrid } from '@chakra-ui/react';
import MovieItem from './MovieItem';
import MovieSkeleton from './MovieSkeleton';
import useMovies from '../hooks/useMovies';

const MovieList = () => {
  const { data: movies, error, isLoading } = useMovies();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
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
