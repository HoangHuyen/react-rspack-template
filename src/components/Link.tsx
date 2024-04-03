import React from "react";

import { tix, tw, withProps } from "@src/libs/tix";

import { Link as NextLink, LinkProps } from "@nextui-org/react";

export const Link = withProps<LinkProps>(tix)(
  {
    variants: {},
  },
  NextLink,
  (styled) => (_props, ref) => {
    const [El, props] = styled(_props);

    return <El ref={ref} {...props} />;
  }
);
