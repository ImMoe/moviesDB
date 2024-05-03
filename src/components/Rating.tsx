import { Badge } from '@chakra-ui/react';

interface Props {
  colorScheme: string;
  rating: string;
}
const Rating = ({ colorScheme, rating }: Props) => {
  return (
    <Badge
      colorScheme={colorScheme}
      fontSize='sm'
      borderRadius={4}
      paddingY={1}
      paddingX={2}
    >
      {rating}
    </Badge>
  );
};

export default Rating;
