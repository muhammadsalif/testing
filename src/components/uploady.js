// https://github.com/rpldy/react-uploady
// @rpldy/uploady

import React from "react";
import Uploady, { useItemProgressListener } from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";

//must be rendered inside <Uploady>
const LogProgress = () => {
  useItemProgressListener((item) => {
    console.log(
      `>>>>> (hook) File ${item.file.name} completed: ${item.completed}`
    );
  });

  return null;
};

export const UploadyComponent = () => (
  <Uploady destination={{ url: "https://httpbin.org/post" }}>
    <LogProgress />
    <UploadButton text="Click me to upload" />
  </Uploady>
);
