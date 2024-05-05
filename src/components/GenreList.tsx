import { Box, List, Spinner } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import GenreItem from './GenreItem';

interface Props {
  onClickHandler: (by: string, id: number) => void;
}
const GenreList = ({ onClickHandler }: Props) => {
  const { genres, error, isLoading } = useGenres();

  if (error) return <h2>{error}</h2>;
  return (
    <List marginTop={10}>
      {isLoading && <Spinner />}
      {genres.map((genre) => (
        <Box paddingBottom={4} key={genre.id}>
          <GenreItem genre={genre} onClickHandler={onClickHandler} />
        </Box>
      ))}
    </List>
  );
};

export default GenreList;
