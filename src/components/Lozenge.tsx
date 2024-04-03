import React from "react";
import { tix, tw, withProps } from "@src/libs/tix";
import {
  Chip as NextChip,
  ChipProps,
  ChipVariantProps,
} from "@nextui-org/react";

type Color = ChipVariantProps["color"] | "error" | "info";

export const Lozenge = withProps<
  Omit<ChipProps, "color"> & {
    color?: Color;
  }
>(tix)(
  {
    base: tw`text-neutral-100 text-xxs leading-4 bg-neutral-700`,
    variants: {
      color: (color: Color) => {
        if (color == "success") {
          return tw`text-semantic-success`;
        }
        if (color == "info") {
          return tw`text-semantic-info`;
        }
        if (color == "warning") {
          return tw`text-semantic-warning`;
        }
        if (color == "error") {
          return tw`text-semantic-error-400 bg-semantic-error-600`;
        }

        return tw``;
      },
    },
  },
  NextChip,
  (styled) => (_props, ref) => {
    const [El, props] = styled(_props);
    const color: ChipVariantProps["color"] =
      _props.color == "error"
        ? "danger"
        : _props.color == "info"
        ? "secondary"
        : _props.color;

    return (
      <El ref={ref} classNames={{}} {...props} color={color} radius="sm" />
    );
  }
);
