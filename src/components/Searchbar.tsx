import React from "react";
import { t } from "@lingui/macro";

import { Input } from "@src/components";
import IconSearch from "@src/assets/search.icon.svg";
import { tw } from "@src/libs/tix";

interface SearchProps {
  onValueChange?: Function;
  defaultValue?: string;
}
export const Searchbar = (props: SearchProps) => {
  return (
    <Input
      placeholder={t`WHAT_ARE_YOU_LOOKING_FOR`}
      isClearable
      radius="sm"
      type="text"
      defaultValue={props.defaultValue}
      classNames={{
        input: [
          tw`text-neutral-100 text-sm2`,
          tw`placeholder:text-neutral-400 `,
        ],
        innerWrapper: tw`gap-3 hover:text-brand-ocean text-neutral-100 text-sm2`,
        inputWrapper: tw`min-h-fit py-1.5 text-sm2 text-neutral-100
          bg-neutral-700 border border-transparent hover:border-brand-ocean h-9`,
      }}
      startContent={
        <IconSearch className="text-neutral-300 pointer-events-none flex-shrink-0 text-lg2" />
      }
      onValueChange={(val) =>
        props.onValueChange ? props.onValueChange(val) : null
      }
      onClear={() => (props.onValueChange ? props.onValueChange("") : null)}
    ></Input>
  );
};
