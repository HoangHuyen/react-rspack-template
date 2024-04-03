import React, { useEffect, useMemo, useRef } from "react";
import { render } from "react-dom";
import { createRoot } from "react-dom/client";

import { tix, tw, withProps, xrefs } from "@src/libs/tix";

import IconNote from "@src/assets/note.icon.svg";

import { Textarea as NextTextarea, TextAreaProps } from "@nextui-org/react";

export const Textarea = withProps<TextAreaProps>(tix)(
  {
    base: tw``,
    variants: {},
  },
  NextTextarea,
  (styled) => (_props, ref) => {
    const [El, props] = styled(_props);

    const elRef = useRef<HTMLInputElement | null>(null);

    const iconWrap = useMemo(() => document.createElement("div"), []);

    useEffect(() => {
      iconWrap.setAttribute("class", "z-10");
      elRef.current?.parentElement?.prepend(iconWrap);
      createRoot(iconWrap).render(
        <IconNote className="text-neutral-400 text-lg2 absolute h-5 translate-y-1/2 top-0 w-5"></IconNote>
      );

      return () => {
        elRef.current?.parentElement?.removeChild(iconWrap);
      };
    }, []);

    return (
      <El
        ref={xrefs<"input">([ref, elRef])}
        {...props}
        classNames={{
          input: [
            tw`text-neutral-100 text-sm2 h-11.5`,
            tw`placeholder:text-neutral-400 placeholder:text-sm2 pl-7`,
          ],
          inputWrapper: tw`border shadow-none gap-0 bg-white items-center min-h-11.5 relative`,
        }}
      ></El>
    );
  }
);
