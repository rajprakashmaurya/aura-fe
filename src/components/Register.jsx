import React, { useState } from "react";
import Swal from "sweetalert2";
import Axios from "axios";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import HomeImage from "../asserts/homeImg.png.png";
import Logo from "../asserts/image 12.png";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [getData, setGetData] = useState([]);
  const [inputData, setInputData] = useState({
    hospitalName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    hosRegDate: "",
    hosResNum: "",
    numAmb: "",
    emgWrdNum: "",
    phoneNumber: "",
    certificate: "",
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
    console.log(inputData);
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const response = await Axios.post(
        "http://localhost:8080/api/v1/user/signup",
        inputData,
        {
          headers: headers,
        }
      );
      const data = response.data;
      console.log("Response Data:", data);

      // Handle the response data here
      Swal.fire({
        icon: "success",
        title: "Your Registration has been Successful",
        showConfirmButton: true,
        confirmButtonText: "OK",
      });
      // setInputData("");
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);

      // Handle any errors that occurred during the POST request
      Swal.fire({
        icon: "error",
        title: "Registration failed",
        text: "An error occurred during registration.",
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
              <Grid container spacing={5}>
                <Grid item lg={6} md={6} xs={12} spacing={5}>
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
                    label="Address"
                    fullWidth
                    name="address"
                    value={inputData.address}
                    onChange={handleInputChange}
                  />
                  <TextField
                    variant="standard"
                    label="City"
                    fullWidth
                    name="city"
                    value={inputData.city}
                    onChange={handleInputChange}
                  />
                  <TextField
                    variant="standard"
                    label="State"
                    fullWidth
                    name="state"
                    value={inputData.state}
                    onChange={handleInputChange}
                  />
                  <TextField
                    variant="standard"
                    label="Pincode"
                    fullWidth
                    name="pincode"
                    value={inputData.pincode}
                    onChange={handleInputChange}
                  />
                  <TextField
                    variant="standard"
                    label=" Hospital Registration Date"
                    fullWidth
                    type="date"
                    name="hosRegDate"
                    value={inputData.hosRegDate}
                    onChange={handleInputChange}
                  />
                  <TextField
                    variant="standard"
                    label="Number Of Ambulance available"
                    fullWidth
                    name="numAmb"
                    value={inputData.numAmb}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                  <TextField
                    variant="standard"
                    label="Email ID"
                    fullWidth
                    name="email"
                    value={inputData.email}
                    onChange={handleInputChange}
                  />
                  <TextField
                    variant="standard"
                    label="Phone Number"
                    fullWidth
                    name="phoneNumber"
                    value={inputData.phoneNumber}
                    onChange={handleInputChange}
                  />
                  <TextField
                    variant="standard"
                    label="Hospital Registration Number"
                    fullWidth
                    name="hosResNum"
                    value={inputData.hosResNum}
                    onChange={handleInputChange}
                  />
                  <TextField
                    variant="standard"
                    label="Emergency-Ward Number"
                    fullWidth
                    name="emgWrdNum"
                    value={inputData.emgWrdNum}
                    onChange={handleInputChange}
                  />
                  <TextField
                    variant="standard"
                    label="Registration certificate Upload"
                    fullWidth
                    type="file"
                    name="certificate"
                    value={inputData.certificate}
                    onChange={handleInputChange}
                  />
                  {/* <Button variant="contained">Choose</Button> */}
                  <TextField
                    variant="standard"
                    label="Create Password"
                    fullWidth
                    name="password"
                    value={inputData.password}
                    onChange={handleInputChange}
                  />
                  <TextField
                    variant="standard"
                    label="Coniform Password"
                    fullWidth
                    name="cfPassword"
                    value={inputData.cfPassword}
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>

              <Box
                my={5}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Button variant="contained" onClick={handleSubmit}>
                  Submit
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

export default Register;
