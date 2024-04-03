import React from "react";
import { tix, tw, withProps } from "@src/libs/tix";
import {
  CircularProgress as NextCircularProgress,
  CircularProgressProps,
} from "@nextui-org/react";

export const CircularProgress = withProps<CircularProgressProps>(tix)(
  {
    variants: {},
  },
  NextCircularProgress,
  (styled) => (_props, ref) => {
    const [El, props] = styled(_props);

    return <El ref={ref} {...props} />;
  }
);
