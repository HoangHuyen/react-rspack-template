import React, { useState, useEffect } from "react";

import IconPlus from "@src/assets/plus.icon.svg";
import IconDecrement from "@src/assets/decrement.icon.svg";
import { Button, Flex, TextFoot } from "@src/components";

interface CounterProps {
  defaultValue: number;
  onChange: (v: number) => void;
}

export const Counter = (props: CounterProps) => {
  const [counter, setCounter] = useState(props.defaultValue);

  useEffect(() => {
    if (counter != props.defaultValue) {
      setCounter(props.defaultValue);
    }
  }, [props.defaultValue]);

  const onPress = (type: string) => {
    switch (type) {
      case "decrement":
        setCounter((prevCounter) => {
          const newCounter = prevCounter - 1;

          props.onChange(newCounter);
          return newCounter;
        });
        break;

      case "increment":
        setCounter((prevCounter) => {
          const newCounter = prevCounter + 1;
          props.onChange(newCounter);
          return newCounter;
        });

        break;
    }
  };

  return (
    <Flex className="items-center [&>*]:flex-shrink-0 ">
      {counter == 0 ? (
        <div className="rounded-full w-6 h-6"></div>
      ) : (
        <Button
          isIconOnly
          size="sm"
          aria-label="select"
          className="text-base"
          onClick={() => {
            onPress("decrement");
          }}
        >
          <IconDecrement />
        </Button>
      )}
      {counter > 0 && (
        <div className="px-1">
          <TextFoot className="w-6 text-center ">{counter}</TextFoot>
        </div>
      )}
      {counter < 99 ? (
        <Button
          isIconOnly
          size="sm"
          aria-label="select"
          className="text-base"
          onClick={() => {
            onPress("increment");
          }}
        >
          <IconPlus />
        </Button>
      ) : (
        <Button
          isIconOnly
          size="sm"
          aria-label="select"
          className="text-base bg-neutral-700 text-neutral-500"
          disabled
        >
          <IconPlus />
        </Button>
      )}
    </Flex>
  );
};
