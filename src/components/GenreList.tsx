import { Badge, HStack, List } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import GenreItem from './GenreItem';
import { Movie } from './MovieItem';

interface Props {
  movies: Movie[];
}
const GenreList = ({ movies }: Props) => {
  const { genres, error, isLoading } = useGenres();

  const getTotalMoviesInGenre = (genreId: number): number => {
    const totalMovies = movies.filter((movie) =>
      movie.genre_ids.includes(genreId)
    );
    return totalMovies.length;
  };

  if (error) return <h2>{error}</h2>;
  return (
    <List marginTop={5}>
      {genres.map((genre) => (
        <HStack padding={1}>
          <Badge fontSize='md'>{getTotalMoviesInGenre(genre.id)}</Badge>
          <GenreItem key={genre.id} genre={genre} />
        </HStack>
      ))}
    </List>
  );
};

export default GenreList;
