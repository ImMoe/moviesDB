import { SimpleGrid, Text, HStack } from '@chakra-ui/react';
import MovieItem, { Movie } from './MovieItem';
import MovieSkeleton from './MovieSkeleton';
import Sort from './Sort';

interface Props {
  data: Movie[];
  error: string;
  isLoading: boolean;
  onSortHandler: (by: string) => void;
}

const MovieList = ({
  data: movies,
  error,
  isLoading,
  onSortHandler,
}: Props) => {
  if (movies.length < 0) return;
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  if (error) return <h2>{error}</h2>;
  return (
    <>
      <HStack justifyContent='space-between' paddingBottom={5}>
        {!isLoading && <Text paddingY={4}>Showing {movies.length} movies</Text>}
        <Sort
          options={['Latest']}
          defaultOption='Trending'
          onSortHandler={onSortHandler}
        />
      </HStack>
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
