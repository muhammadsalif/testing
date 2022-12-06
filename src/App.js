import "./styles.css";
import React from "react";
import {
  Button,
  Stack,
  Radio,
  RadioGroup,
  Box,
  Container,
  Heading
} from "@chakra-ui/react";
import { UploadyComponent } from "./components/uploady";
import { FilePondComponent } from "./components/filepond";
import { DropzoneUploader } from "./components/dropzone";
import { UppyComponent } from "./components/uppy";

export default function App() {
  const [value, setValue] = React.useState("react-filepond");

  return (
    <Container>
      <Heading>React File Uploads</Heading>
      <RadioGroup onChange={setValue} value={value}>
        <Stack direction="row">
          <Radio value="react-filepond">react-filepond</Radio>
          <Radio value="react-dropzone-uploader">react-dropzone-uploader</Radio>
          <Radio value="react-uploady">react-uploady</Radio>
          <Radio value="@uppy/react">@uppy/react</Radio>
        </Stack>
      </RadioGroup>

      {value === "react-filepond" && (
        <Box>
          react-filepond
          <FilePondComponent />
        </Box>
      )}
      {value === "react-dropzone-uploader" && (
        <Box>
          <DropzoneUploader />
        </Box>
      )}
      {value === "react-uploady" && (
        <Box>
          <UploadyComponent />
        </Box>
      )}
      {value === "@uppy/react" && (
        <Box>
          <UppyComponent />
        </Box>
      )}

      {/* <Button type="submit" marginBottom={4}>
        Submit
      </Button> */}
    </Container>
  );
}
