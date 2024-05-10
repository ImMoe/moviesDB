import { SimpleGrid, Text, HStack } from '@chakra-ui/react';
import MovieItem, { Movie } from './MovieItem';
import MovieSkeleton from './MovieSkeleton';
import Sort from './Sort';

interface Props {
  data: Movie[];
  error: string;
  isLoading: boolean;
  onSortHandler: (by: string) => void;
  onShowTrailer: (id: number) => void;
}

const MovieList = ({
  data: movies,
  error,
  isLoading,
  onSortHandler,
  onShowTrailer,
}: Props) => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  if (error) return <h2>{error}</h2>;
  return (
    <>
      <HStack justifyContent='space-between' paddingY={5}>
        <Text
          fontSize={{
            base: 'xx-large',
            lg: 'xxx-large',
          }}
          fontWeight='bold'
        >
          Movies
        </Text>
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
          <MovieItem
            key={movie.id}
            movie={movie}
            onShowTrailer={onShowTrailer}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieList;
