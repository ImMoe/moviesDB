import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

const MovieSkeleton = () => {
  return (
    <Card borderRadius={8} overflow='hidden'>
      <Skeleton height='350px' />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default MovieSkeleton;
