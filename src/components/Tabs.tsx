import React, { ComponentPropsWithRef } from "react";
import { tix, tw, withProps } from "@src/libs/tix";
import {
  Tabs as NextTabs,
  TabsProps,
  Tab as NextTab,
  TabItemProps,
} from "@nextui-org/react";
import { CollectionProps } from "@nextui-org/aria-utils";

const _Tabs = withProps<TabsProps<any>>(tix)(
  {
    base: tw`h-9`,
    variants: {},
  },
  NextTabs,
  (styled) => (_props, ref) => {
    const [El, props] = styled(_props);

    return (
      <El
        ref={ref}
        {...props}
        classNames={{
          tab: tw`px-4 py-2 data-[focus-visible=true]:outline-offset-0 z-20 border-neutral-800 border-1 bg-white 
          text-xs2 h-9`,
          tabList: tw`py-1 p-0 h-9`,
          cursor: tw`-z-10 bg-semantic-warning-600 shadow-none rounded-full`,
          tabContent: tw`group-data-[selected=true]:text-semantic-warning-400
          text-xs2 font-medium text-neutral-200`,
        }}
        radius="full"
        variant="light"
      ></El>
    );
  }
);

export const Tabs = <T,>(
  props: Omit<ComponentPropsWithRef<typeof _Tabs>, keyof CollectionProps<T>> &
    CollectionProps<T>
) => <_Tabs {...props}></_Tabs>;

export const Tab = withProps<TabItemProps>(tix)(
  {
    variants: {},
  },
  NextTab,
  (styled) => (_props, ref) => {
    const [El, props] = styled(_props);

    return <El {...props}></El>;
  }
);
