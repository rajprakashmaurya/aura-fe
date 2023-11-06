import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import HomeImage from "../asserts/homeImg.png.png";
import Camera from "../asserts/mdi_camera.png";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { useAuth } from "../context/authContext";

function TakePhoto() {
  const [auth, setAuth] = useAuth();
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [isCameraActive, setIsCameraActive] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    startCamera();
  }, []);

  const startCamera = () => {
    setIsCameraActive(true);
    setIsSubmitted(false);
  };

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    setIsCameraActive(false);
    setIsSubmitted(true);
  };

  const handleCapture = () => {
    if (isCameraActive) {
      capture();
    } else {
      startCamera();
    }
  };

  const handleSubmission = () => {
    // Handle your submission logic here
    navigate("/data"); // Navigate to the next component
  };

  return (
    <Container component="main" maxWidth="xl" sx={{ my: 2 }}>
      <Grid container spacing={3}>
        <Grid item lg={4} md={5} xs={12}>
          <img src={HomeImage} alt="" width="100%" />
        </Grid>
        <Grid item lg={8} md={7} xs={12}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            p={3}
          >
            <Box
              display={"flex"}
              gap={10}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Box marginLeft={10}>
                <Typography variant="h5">
                  <span style={{ color: "gray" }}>Sign Up</span> / Login
                </Typography>
              </Box>
            </Box>
            <form>
              <Typography variant="body1">
                Please capture your face to continue
              </Typography>
              <Card>
                <Box
                  height={300}
                  width={400}
                  p={2}
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={1}
                  sx={{
                    backgroundColor: "#C0C0C0",
                  }}
                >
                  {isCameraActive ? (
                    <Webcam
                      audio={false}
                      ref={webcamRef}
                      screenshotFormat="image/jpeg"
                    />
                  ) : (
                    <img
                      src={isCameraActive ? Camera : capturedImage}
                      alt=""
                      width="100%"
                    />
                  )}
                </Box>
              </Card>

              <Box
                my={5}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Button
                  variant="contained"
                  color={isCameraActive ? "primary" : "success"}
                  onClick={isSubmitted ? handleSubmission : handleCapture}
                >
                  {isCameraActive ? "Capture" : "Submit"}
                </Button>
              </Box>
            </form>
            <Typography variant="body2">
              *Terms and Conditions | Privacy Policy
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TakePhoto;
