import { tix, tw } from "@src/libs/tix";

export const Head = tix(
  {
    base: tw`text-neutral-100 font-normal`,
    variants: {
      sz: {
        medium26: tw`text-xl leading-8.5 font-medium`,
        bold18: tw`text-lg leading-6.5 font-bold`,
        medium15: tw`text-sm2 font-medium`,
        medium13: tw`text-xs2 font-medium`,
      },
    },
    defaults: {
      sz: "medium26",
    },
  },
  "div"
);

export const Text = tix(
  {
    base: tw`text-neutral-100 font-normal`,
    variants: {
      sz: {
        regular15: tw`text-sm2`,
        regular13: tw`text-xs2`,
      },
    },
    defaults: {
      sz: "regular15",
    },
  },
  "div"
);

export const TextFoot = tix(
  {
    base: tw`text-neutral-100 font-medium`,
    variants: {
      sz: {
        medium13: tw`text-xs2`,
        medium11: tw`text-xxs leading-4`,
      },
    },
    defaults: {
      sz: "medium13",
    },
  },
  "div"
);
