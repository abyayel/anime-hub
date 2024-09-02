import { Box, Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function AnimeCardSkeleton() {
  return (
    <Box>
      <Card borderRadius={10} overflow={"hidden"}>
        <Skeleton height={400}></Skeleton>
        <CardBody>
          <SkeletonText height={70}></SkeletonText>
        </CardBody>
      </Card>
    </Box>
  );
}

export default AnimeCardSkeleton;
