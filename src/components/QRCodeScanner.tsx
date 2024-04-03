import React, { useEffect, useId, useState } from "react";

import { Html5QrcodeResult, Html5Qrcode } from "html5-qrcode";

interface Html5QrcodePluginProps {
  onResult: (decodedText: string) => void;
  onError: (errorText: string) => void;
}

const qrcodeRegionId = "html5qr";

export const QRCodeScanner: React.FC<Html5QrcodePluginProps> = (props) => {
  useEffect(() => {
    const html5QrcodeScanner = new Html5Qrcode(qrcodeRegionId);

    let height = window.innerHeight;
    let width = window.innerWidth;
    const main = document.getElementById("mainLayout");
    if (main) {
      width = main.offsetWidth;
      height = document.documentElement.clientHeight;
    }

    const aspectRatio = width / height;
    const reverseAspectRatio = height / width;

    const mobileAspectRatio =
      reverseAspectRatio > 1.5
        ? reverseAspectRatio + (reverseAspectRatio * 12) / 100
        : reverseAspectRatio;

    html5QrcodeScanner
      .start(
        { facingMode: "environment" },
        {
          fps: 10,
          qrbox: { width: 200, height: 200 },
          videoConstraints: {
            facingMode: "environment",
            aspectRatio: width < 448 ? mobileAspectRatio : aspectRatio,
          },
        },
        (decodedText: string, decodedResult: Html5QrcodeResult) => {
          props.onResult(decodedText);
        },
        (err: string) => {
          props.onError;
        }
      )
      .then(() => {});

    return () => {
      html5QrcodeScanner.stop().catch((error) => {
        console.error("Failed to clear html5QrcodeScanner. ", error);
      });
    };
  }, [props.onResult]);

  return <div id={qrcodeRegionId} className="flex items-center flex-col"></div>;
};
