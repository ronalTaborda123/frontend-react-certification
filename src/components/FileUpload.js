import React, { useState, useEffect, useMemo } from "react";
// import { Input } from "@material-ui/core";
import { useDropzone } from "react-dropzone";
// import FileViewer from "react-file-viewer";

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 200,
  height: 200,
  padding: 4,
  boxSizing: "border-box",
};
const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const FileUpload = () => {
  const [images, setImagesData] = useState([]);

  useEffect(() => {
    console.log("images2", images);
  }, [images]);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setImagesData(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const thumbs = images.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img alt="img" src={file.preview} style={img} />
      </div>
    </div>
  ));

  return (
    <div>
      <br></br>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Arrastre y suelte algunos archivos aquí</p>
      </div>
      <br></br>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </div>
  );
};

export default FileUpload;
