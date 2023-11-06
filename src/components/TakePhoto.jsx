import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import HomeImage from "../asserts/homeImg.png.png";
import Logo from "../asserts/image 12.png";
import Camera from "../asserts/mdi_camera.png";
import { useNavigate } from "react-router-dom";

function TakePhoto() {
  const navigate = useNavigate();

  const handleCapture = () => {
    //
    navigate("/data");
  };

  return (
    <Container component="main" maxWidth="xl" sx={{ my: 2 }}>
      <Grid container spacing={3}>
        {/* Image */}
        <Grid item lg={4} md={5} xs={12}>
          <img src={HomeImage} alt="" width="100%" />
        </Grid>
        {/* Form */}
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
              <Box marginLeft={-40}>
                <img src={Logo} alt="" />
              </Box>

              <Box marginLeft={10}>
                <Typography variant="h5">
                  {" "}
                  <span style={{ color: "gray" }}>Sign Up </span>/ Login
                </Typography>
              </Box>
            </Box>
            <form>
              <Typography variant="body1">
                Please Capture our face to continue
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
                  <img src={Camera} alt="" />
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
                  color="success"
                  onClick={handleCapture}
                >
                  Capture
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
