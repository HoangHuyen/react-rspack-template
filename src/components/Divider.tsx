import React from "react";
import { DividerProps, Divider as NextDivider } from "@nextui-org/react";
import { tix, withProps } from "@src/libs/tix";

export const Divider = withProps<DividerProps>(tix)(
  {
    variants: {},
  },
  NextDivider,
  (styled) => (_props, ref) => {
    const [El, props] = styled(_props);

    return <El ref={ref} {...props} />;
  }
);
