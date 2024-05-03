import { List, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import GenreItem from './GenreItem';

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();

  if (error) return <h2>{error}</h2>;
  return (
    <List>
      {genres.map((genre) => (
        <GenreItem key={genre.id} genre={genre} />
      ))}
    </List>
  );
};

export default GenreList;
