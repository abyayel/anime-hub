import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

interface Props {
  borderRadius: string | number;
}

function AnimeCardSkeleton({ borderRadius }: Props) {
  return (
    <Card borderRadius={borderRadius} overflow="hidden">
      <Skeleton height={400}></Skeleton>
      <CardBody>
        <SkeletonText height={70}></SkeletonText>
      </CardBody>
    </Card>
  );
}

export default AnimeCardSkeleton;
