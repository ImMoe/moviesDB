import { SimpleGrid, Text } from '@chakra-ui/react';
import MovieItem, { Movie } from './MovieItem';
import MovieSkeleton from './MovieSkeleton';

interface Props {
  data: Movie[];
  error: string;
  isLoading: boolean;
}

const MovieList = ({ data: movies, error, isLoading }: Props) => {
  if (movies.length < 0) return;
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  if (error) return <h2>{error}</h2>;
  return (
    <>
      <Text paddingY={4}>Showing {movies.length} movies</Text>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        spacing={8}
      >
        {movies.length === 0 && (
          <Text>There is no movies in this category. </Text>
        )}
        {isLoading &&
          skeletons.map((skeleton) => <MovieSkeleton key={skeleton} />)}
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieList;
