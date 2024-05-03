import { Card, CardBody, Image, Text } from '@chakra-ui/react';

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface Props {
  movie: Movie;
}

const MovieItem = ({ movie }: Props) => {
  return (
    <Card borderRadius={8} overflow='hidden'>
      <Image
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        height='350px'
        objectFit='cover'
      />
      <CardBody>
        <Text fontSize='lg'>{movie.title}</Text>
      </CardBody>
    </Card>
  );
};

export default MovieItem;
