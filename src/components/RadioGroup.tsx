import {
  RadioGroupProps,
  RadioGroup as NextRadioGroup,
  Radio as NextRadio,
  RadioProps,
  useRadio,
  VisuallyHidden,
  cn,
  extendVariants,
} from "@nextui-org/react";
import { tix, withProps, tw, twConfig } from "@src/libs/tix";
import React, { useEffect, useState } from "react";

const _NextRadio = extendVariants(
  NextRadio,
  {},
  {
    twMerge: true,
    twMergeConfig: twConfig,
  }
);
export const RadioGroup = withProps<RadioGroupProps>(tix)(
  {
    variants: {},
  },
  NextRadioGroup,
  (styled) => (_props, ref) => {
    const [El, props] = styled(_props);

    return (
      <El
        ref={ref}
        {...props}
        defaultValue={_props.defaultValue}
        classNames={{
          label: tw`text-neutral-100 text-sm2 font-medium pt-4`,
          wrapper: tw`gap-y-0`,
          base: tw`gap-0`,
        }}
      />
    );
  }
);

export const Radio = withProps<RadioProps>(tix)(
  {
    variants: {},
  },
  _NextRadio,
  (styled) => (_props, ref) => {
    const [El, props] = styled(_props);
    return (
      <El
        ref={ref}
        classNames={{
          base: tw`max-w-full gap-3 -m-0 p-0 py-2.5`,
          labelWrapper: tw`flex flex-row  items-center w-full ml-0 flex-grow`,
          label: tw`w-full text-sm2 text-neutral-200`,
          wrapper: tw`mr-0`,
          description: tw`text-neutral-300 text-sm2 min-w-fit`,
        }}
        {...props}
      ></El>
    );
  }
);
