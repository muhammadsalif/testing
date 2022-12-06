// https://github.com/transloadit/uppy
// npm install @uppy/react

import React from "react";
import Uppy from "@uppy/core";
import Tus from "@uppy/tus";
import { DragDrop } from "@uppy/react";
import { Dashboard } from "@uppy/react";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import "@uppy/drag-drop/dist/style.css";

const uppy = new Uppy({
  meta: { type: "avatar" },
  restrictions: { maxNumberOfFiles: 3 },
  autoProceed: false
});

uppy.use(Tus, { endpoint: "https://httpbin.org/post" });

uppy.on("complete", (result) => {
  const url = result.successful[0].uploadURL;
  // store.dispatch({
  //   type: 'SET_USER_AVATAR_URL',
  //   payload: { url },
  // })
  console.log(url);
});

export const UppyComponent = (props) => {
  const uppy = React.useMemo(() => {
    return new Uppy({
      restrictions: { maxNumberOfFiles: 3 },
      autoProceed: false
    });
  }, []);

  React.useEffect(() => {
    return () => uppy.close();
  }, []);

  return (
    <div>
      <Dashboard uppy={uppy} plugins={["DragDrop"]} {...props} />
    </div>
  );
};
