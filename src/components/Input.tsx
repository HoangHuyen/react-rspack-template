import React from "react";

import { tix, tw, withProps } from "@src/libs/tix";

import { Input as NextInput, InputProps } from "@nextui-org/react";

export const Input = withProps<InputProps>(tix)(
  {
    variants: {},
  },
  NextInput,
  (styled) => (_props, ref) => {
    const [El, props] = styled(_props);

    return <El ref={ref} {...props} />;
  }
);
