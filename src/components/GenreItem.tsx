import { Button } from '@chakra-ui/react';
import { Genre } from '../hooks/useGenres';

interface Props {
  genre: Genre;
  onClickHandler: (by: string, value: number) => void;
}
const GenreItem = ({ genre, onClickHandler }: Props) => {
  return (
    <Button fontSize='lg' onClick={() => onClickHandler('genre', genre.id)}>
      {genre.name}
    </Button>
  );
};

export default GenreItem;
