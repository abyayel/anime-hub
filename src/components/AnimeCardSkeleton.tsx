import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function AnimeCardSkeleton() {
  return (
    <Card>
      <Skeleton height={400}></Skeleton>
      <CardBody>
        <SkeletonText height={70}></SkeletonText>
      </CardBody>
    </Card>
  );
}

export default AnimeCardSkeleton;
