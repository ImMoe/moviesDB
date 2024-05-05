import { Button, Card, CardBody, HStack, Image, Text } from '@chakra-ui/react';
import Rating from './Rating';

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
}

interface Props {
  movie: Movie;
  onShowTrailer: (id: number) => void;
}

const MovieItem = ({ movie, onShowTrailer }: Props) => {
  return (
    <Card borderRadius={8} overflow='hidden'>
      <Image
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        height='350px'
        objectFit='cover'
      />
      <CardBody>
        <Text fontSize='md' fontWeight='bold'>
          {movie.title}
        </Text>
        <HStack justifyContent='space-between'>
          <Text fontSize='sm'>{movie.release_date}</Text>
          <Rating
            colorScheme={
              movie.vote_average < 4
                ? 'red'
                : movie.vote_average < 6
                ? 'yellow'
                : movie.vote_average < 10
                ? 'green'
                : ''
            }
            rating={movie.vote_average.toFixed(1)}
          />
        </HStack>
        <Button
          variant='link'
          paddingTop={2}
          colorScheme='orange'
          fontWeight='bold'
          cursor='pointer'
          textDecoration='underline'
          onClick={() => onShowTrailer(movie.id)}
        >
          Watch Trailer
        </Button>
      </CardBody>
    </Card>
  );
};

export default MovieItem;
