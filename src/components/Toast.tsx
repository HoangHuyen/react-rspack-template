import { tix } from "@src/libs/tix";
import {
  ToastContainerProps,
  toast as reactToast,
  ToastContainer,
} from "react-toastify";
import { tw, withProps } from "styled-tix";

import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.minimal.css";

const ErrorMessage: React.FC<{ errorCode: string }> = (props) => {
  let errorMessage = `ErrorCodeMessages.${props.errorCode}` as any;
  if (!errorMessage) errorMessage = "Server unknown error response.";

  return <span>{errorMessage}</span>;
};

interface IToastMessage {
  type: "error" | "success" | "info" | "warn" | "warning";
  message: string;
}

const ToastMessage = ({ type, message }: IToastMessage) => {
  return reactToast[type](
    <div className="text-xs2 font-normal font-inter text-neutral-200 ">
      {message}
    </div>
  );
};

ToastMessage.dismiss = reactToast.dismiss;

export const toast = ToastMessage;

export const MyToastContainer = withProps<ToastContainerProps>(tix)(
  {
    variants: {},
  },
  ToastContainer,
  (styled) => (_props, ref) => {
    const [El, props] = styled(_props);

    return (
      <El
        ref={ref}
        {...props}
        position="bottom-center"
        autoClose={_props.autoClose}
        hideProgressBar={true}
        newestOnTop={true}
        draggable={false}
        closeOnClick
        pauseOnHover
        icon={false}
        closeButton={false}
        toastClassName={tw`bg-semantic-success-600 border-semantic-success-500 rounded-xl border m-4 px-4 py-3 min-h-fit`}
        bodyClassName={tw`w-full m-0 p-0`}
      />
    );
  }
);
