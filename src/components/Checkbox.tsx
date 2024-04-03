import {
  CheckboxGroupProps,
  CheckboxGroup as NextCheckboxGroup,
  Checkbox as NextCheckbox,
  CheckboxProps,
  useCheckbox,
  VisuallyHidden,
  cn,
  extendVariants,
} from "@nextui-org/react";
import { tix, withProps, tw, twConfig } from "@src/libs/tix";
import React from "react";

const _NextCheckbox = extendVariants(
  NextCheckbox,
  {},
  {
    twMergeConfig: twConfig,
  }
);

interface IProps {
  description?: string;
}

export const CheckboxGroup = withProps<CheckboxGroupProps>(tix)(
  {
    variants: {},
  },
  NextCheckboxGroup,
  (styled) => (_props, ref) => {
    const [El, props] = styled(_props);

    return (
      <El
        ref={ref}
        {...props}
        classNames={{
          label: tw`text-neutral-100 text-sm2 font-medium pt-4`,
          wrapper: tw`gap-y-0`,
        }}
      />
    );
  }
);

export const Checkbox = withProps<CheckboxProps & IProps>(tix)(
  {
    variants: {},
  },
  _NextCheckbox,
  (styled) => (_props, ref) => {
    const [El, props] = styled(_props);
    const { children } = useCheckbox({
      ..._props,
    });

    return (
      <El
        ref={ref}
        {...props}
        classNames={{
          base: tw`max-w-full`,
          wrapper: tw`mr-0`,
          label: tw`w-full py-3`,
        }}
      >
        <div className="w-full flex justify-between ml-3 items-center">
          <span className="text-neutral-200 font-normal text-sm2">
            {children}
          </span>
          {_props.description && (
            <span className="text-sm2 text-neutral-300">
              {_props.description}
            </span>
          )}
        </div>
      </El>
    );
  }
);
