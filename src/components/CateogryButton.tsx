import { Button, Skeleton } from "@chakra-ui/react";

interface Props {
  width?: number;
}

function CategoryButtonSkeleton({ width }: Props) {
  return (
    <Skeleton borderRadius={5}>
      <Button width={width}></Button>
    </Skeleton>
  );
}

export default CategoryButtonSkeleton;
