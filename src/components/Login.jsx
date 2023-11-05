import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Swal from "sweetalert2";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import HomeImage from "../asserts/homeImg.png.png";
import Logo from "../asserts/image 12.png";

function Login() {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    hospitalName: "",
    email: "",
    password: "",
    cfPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("login");
    console.log(inputData);

    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const response = await Axios.post(
        "http://localhost:8080/api/v1/user/login",
        inputData,
        {
          headers: headers,
        }
      );
      const data = response.data;
      console.log("data", data);
      Swal.fire({
        icon: "success",
        title: "Login has been Successful",
        showConfirmButton: true,
        confirmButtonText: "OK",
      });
      navigate("/data");
    } catch (error) {
      console.error("Error:", error);

      // Handle any errors that occurred during the POST request
      Swal.fire({
        icon: "error",
        title: "Login  failed",
        text: "An error occurred during login.",
        showConfirmButton: true,
        confirmButtonText: "OK",
      });
    }
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
                <Typography variant="h5">Sign Up / Login</Typography>
              </Box>
            </Box>
            <form onSubmit={handleSubmit}>
              <Card>
                <Box
                  p={2}
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={1}
                  my={5}
                >
                  <Typography variant="h5">Welcome to Sicu-aura</Typography>
                  <Typography variant="body2">
                    Your one stop safety solutions using innovative technology
                  </Typography>

                  <TextField
                    variant="standard"
                    label="Hospital Name"
                    fullWidth
                    name="hospitalName"
                    value={inputData.hospitalName}
                    onChange={handleInputChange}
                  />
                  <TextField
                    variant="standard"
                    label="Email Id"
                    fullWidth
                    name="email"
                    value={inputData.email}
                    onChange={handleInputChange}
                  />
                  <TextField
                    variant="standard"
                    label="Password"
                    fullWidth
                    name="password"
                    value={inputData.password}
                    onChange={handleInputChange}
                  />
                  <TextField
                    variant="standard"
                    label="Special Access Code"
                    fullWidth
                    name="cfPassword"
                    value={inputData.cfPassword}
                    onChange={handleInputChange}
                  />
                </Box>
              </Card>

              <Box
                my={5}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  color="success"
                >
                  Login
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

export default Login;
