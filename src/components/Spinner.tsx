import React from "react";

import { tix, tw, withProps } from "@src/libs/tix";

import { Spinner as NextSpinner, SpinnerProps } from "@nextui-org/react";

export const Spinner = withProps<SpinnerProps>(tix)(
  {
    variants: {},
  },
  NextSpinner,
  (styled) => (_props, ref) => {
    const [El, props] = styled(_props);

    return <El ref={ref} {...props} />;
  }
);
