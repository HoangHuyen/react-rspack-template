import React from "react";

import { tix, tw, withProps } from "@src/libs/tix";

import {
  ModalProps,
  Modal as NextModal,
  ModalContent as NextModalContent,
  ModalHeader as NextModalHeader,
  ModalBody as NextModalBody,
  ModalFooter as NextModalFooter,
  ModalContentProps,
  ModalHeaderProps,
  ModalFooterProps,
  ModalBodyProps,
} from "@nextui-org/react";

export const Modal = withProps<ModalProps>(tix)(
  {
    variants: {},
  },
  NextModal,
  (styled) => (_props, ref) => {
    const [El, props] = styled(_props);

    return <El ref={ref} {...props} />;
  }
);

export const ModalContent = withProps<ModalContentProps>(tix)(
  {
    variants: {},
  },
  NextModalContent,
  (styled) => (_props, ref) => {
    const [El, props] = styled(_props);

    return <El ref={ref} {...props} />;
  }
);

export const ModalHeader = withProps<ModalHeaderProps>(tix)(
  {
    variants: {},
  },
  NextModalHeader,
  (styled) => (_props, ref) => {
    const [El, props] = styled(_props);

    return <El ref={ref} {...props} />;
  }
);

export const ModalBody = withProps<ModalBodyProps>(tix)(
  {
    variants: {},
  },
  NextModalBody,
  (styled) => (_props, ref) => {
    const [El, props] = styled(_props);

    return <El ref={ref} {...props} />;
  }
);

export const ModalFooter = withProps<ModalFooterProps>(tix)(
  {
    variants: {},
  },
  NextModalFooter,
  (styled) => (_props, ref) => {
    const [El, props] = styled(_props);

    return <El ref={ref} {...props} />;
  }
);
