import { Button } from '@chakra-ui/react';
import { Genre } from '../hooks/useGenres';

interface Props {
  genre: Genre;
  onClickHandler: (id: number) => void;
}
const GenreItem = ({ genre, onClickHandler }: Props) => {
  return (
    <Button fontSize='lg' onClick={() => onClickHandler(genre.id)}>
      {genre.name}
    </Button>
  );
};

export default GenreItem;
