import { ListItem } from '@chakra-ui/react';
import { Genre } from '../hooks/useGenres';

interface Props {
  genre: Genre;
}
const GenreItem = ({ genre }: Props) => {
  return (
    <ListItem fontSize='lg' marginBottom={2} cursor='pointer'>
      {genre.name}
    </ListItem>
  );
};

export default GenreItem;
