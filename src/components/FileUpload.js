import React, { useState, useCallback, useEffect } from "react";
// import { Input } from "@material-ui/core";
import { useDropzone } from "react-dropzone";

const FileUpload = () => {
  const [images, setImagesData] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      console.log("acceptedFiles", acceptedFiles);
      let stateImages = images;
      stateImages = stateImages.concat(acceptedFiles);
      setImagesData(stateImages);
    },
    [images]
  );

  useEffect(() => {
    console.log("images2", images);
  }, [images]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div>
      <br></br>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Arrastre y suelte algunos archivos aquí</p>
        )}
      </div>
      <input type="submit"></input>
      <br></br>
      {/* <img src={images} width="250" height="250" alt="Imagen" /> */}
    </div>
  );
};

export default FileUpload;
