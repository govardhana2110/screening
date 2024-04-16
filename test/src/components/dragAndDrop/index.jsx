import React, { useState } from "react";
import axios from "axios";
import ProgressBar from "react-bootstrap/ProgressBar";

const DrangAndDrop = () => {
  const [filesList, setFilesList] = useState([]);
  const [progress, setProgress] = useState({ percentage: 0, show: false });

  const handleDrop = (e) => {
    e.preventDefault();
    const newFiles = [...e.dataTransfer.files];
    setFilesList((prevFilesList) => [...prevFilesList, ...newFiles]);
  };
  const handleUploadAllFiles = () => {
    filesList.map((file) => {
      handleUploadFileList(file);
    });
  };
  const handleUploadFileList = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    setProgress((prev) => ({ ...prev, show: true }));

    try {
      const response = await axios.post("API URL", formData, {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress((prev) => ({ ...prev, percentage: percentCompleted }));
          if (parseInt(percentCompleted) === 100) {
            setProgress((prev) => ({
              ...prev,
              percentage: percentCompleted,
              show: false,
            }));
          }
        },
      });
      console.log("Documents uploaded", response.data);
    } catch (error) {
      console.error("Error uploading documents", error);
    }
    setProgress((prev) => ({ ...prev, show: false }));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h2>Drag & Drop Files Here</h2>
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        style={{
          border: "2px dotted #ccc",
          animation: "rotate 2s linear infinite",
          width: "auto",
        }}
      >
        Drop files here
      </div>
      <button onClick={handleUploadAllFiles}>Upload</button>
      <ul>
        {filesList.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
      {progress.show && <ProgressBar animated now={progress.percentage} />}
    </div>
  );
};

export default DrangAndDrop;
