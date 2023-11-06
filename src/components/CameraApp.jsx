import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

function CameraComponent() {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const capture = () => {
    console.log("image");
    const imageSrc = webcamRef.current.getScreenshot();
    console.log("Captured image:", imageSrc);
    setCapturedImage(imageSrc); // Store the captured image
  };

  return (
    <div>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={capture}>Capture Photo</button>
      {capturedImage && (
        <img src={capturedImage} alt="Captured" /> // Display the captured image
      )}
    </div>
  );
}

export default CameraComponent;
