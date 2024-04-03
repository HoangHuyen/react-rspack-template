import React from "react";
import { tix, tw, withProps } from "@src/libs/tix";
import { ImageProps, Image as NextImage } from "@nextui-org/react";
import { LazyLoadImage } from "@tjoskar/react-lazyload-img";

export const Image = tix(
  {
    variants: {},
  },
  LazyLoadImage,
  (styled) => (_props, ref) => {
    const [El, props] = styled(_props);

    // return <El ref={ref} {...props} disableSkeleton loading="lazy" />;
    return <El {...props} loading="lazy" />;
  }
);
