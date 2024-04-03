import React from "react";
import {
  CardProps,
  Card as NextCard,
  CardBody as NextCardBody,
  CardHeader as NextCardHeader,
  CardFooter as NextCardFooter,
} from "@nextui-org/react";
import { tix, withProps } from "@src/libs/tix";

export const Card = withProps<CardProps>(tix)(
  {
    variants: {},
  },
  NextCard,
  (styled) => (_props, ref) => {
    const [El, props] = styled(_props);

    return <El ref={ref} {...props} />;
  }
);

export const CardBody = tix(
  {
    variants: {},
  },
  NextCardBody
);

export const CardFooter = tix(
  {
    variants: {},
  },
  NextCardFooter
);

export const CardHeader = tix(
  {
    variants: {},
  },
  NextCardHeader
);
