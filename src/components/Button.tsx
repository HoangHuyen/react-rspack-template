import React from "react";
import { tix, tw, withProps } from "@src/libs/tix";

import {
  Button as NextButton,
  ButtonProps,
  ButtonVariantProps,
} from "@nextui-org/react";
import { Trans } from "@lingui/macro";

type Size = ButtonVariantProps["size"] | "xs";

export const Button = withProps<
  Omit<ButtonProps, "size"> & {
    size?: Size;
  }
>(tix)(
  {
    base: tw`leading-5 font-medium`,
    variants: {
      color: (color: ButtonVariantProps["color"]) => {
        if (color == "secondary") {
          return tw`text-neutral-100 bg-brand-lemon hover:bg-semantic-warning-500`;
        }
        if (color == "primary") {
          return tw`data-[hover=true]:bg-transparent`;
        }
        return "";
      },
      variant: (variant: ButtonVariantProps["variant"], stylesOf) => {
        const { size } = stylesOf(Button);

        if (variant == "light") {
          if (size == "md") {
            return tw`leading-5`;
          }
          if (size == "lg") {
            return tw`leading-5.5`;
          }
        }

        return "";
      },
      size: (size: ButtonVariantProps["size"]) => {
        if (size == "sm") {
          return tw`w-unit-6 min-w-unit-6 h-unit-6 gap-unit-1 rounded-full text-tiny`;
        }
        if (size == "md") {
          return tw`min-w-unit-6 h-unit-9 gap-unit-1 rounded-full text-xs2`;
        }
        if (size == "lg") {
          return tw`min-w-unit-6 h-unit-12 gap-unit-1 rounded-full text-sm2`;
        }
        return tw``;
      },
      isDisabled: tw`text-neutral-500 bg-neutral-700 pointer-events-none`,
    },
    defaults: {
      color: "secondary",
    },
  },
  NextButton,
  (styled) => (_props, ref) => {
    const [El, props] = styled(_props);

    return (
      <El
        ref={ref}
        {...props}
        variant={_props.variant}
        size={_props.size as any}
        color={_props.color}
        radius="full"
      />
    );
  }
);

interface IProps {
  counter?: React.ReactNode;
}

export const Floating = withProps<ButtonProps & IProps>(tix)(
  {
    base: tw`h-fit text-xs2 font-medium px-4 py-2 rounded-full`,
    variants: {},
  },
  NextButton,
  (styled) => (_props, ref) => {
    const [El, props] = styled(_props);
    return (
      <El ref={ref} color={_props.color} {...props} variant={"shadow"}>
        <Trans>{`ORDER_SUMMARY`}</Trans>{" "}
        {_props.counter ? `(${_props.counter})` : ""}
      </El>
    );
  }
);
