import React from "react";

import { tix, tw, withProps } from "@src/libs/tix";

import { Skeleton as NextSkeleton, SkeletonProps } from "@nextui-org/react";

export const Skeleton = withProps<SkeletonProps>(tix)(
  {
    variants: {},
  },
  NextSkeleton,
  (styled) => (_props, ref) => {
    const [El, props] = styled(_props);

    return <El ref={ref} {...props} />;
  }
);
