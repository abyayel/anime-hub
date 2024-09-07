import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

interface Props {
  borderRadius: string | number;
}

function AnimeCardSkeleton({ borderRadius }: Props) {
  return (
    <Card
      width="100%"
      maxW={{ base: " 317px", md: "352", xl: "303px", "2xl": "507px" }}
      borderRadius={borderRadius}
      overflow="hidden"
    >
      <Skeleton height={400}></Skeleton>
      <CardBody>
        <SkeletonText height={70}></SkeletonText>
      </CardBody>
    </Card>
  );
}

export default AnimeCardSkeleton;
