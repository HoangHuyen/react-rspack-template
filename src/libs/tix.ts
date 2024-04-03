import { newTix } from "styled-tix";
import { twMerge, extendTailwindMerge, Config } from "tailwind-merge";

export const twConfig: Partial<Config> = {
  classGroups: {
    fontSize: [
      {
        text: [],
      },
    ],
    colors: [{ text: ["neutral-300", "foreground-400"] }],
    transitionProperty: [{ transition: ["height"] }],
  },
};

const customTwMerge = extendTailwindMerge(twConfig);

export const tix = newTix(customTwMerge);

export * from "styled-tix";
