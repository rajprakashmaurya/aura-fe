import React from "react";
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

function Register() {
  return (
    <Container maxWidth="xl">
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
            <Box display={"inline-flex"} gap={10} alignItems={"center"}>
              <img src={Logo} alt="" />
              <Typography variant="h5">Sign Up / Login</Typography>
            </Box>
            <form>
              <Grid container spacing={5}>
                <Grid item lg={6} md={6} xs={12}>
                  <TextField
                    variant="standard"
                    label="Hospital Name"
                    fullWidth
                  />
                  <TextField variant="standard" label="Address" fullWidth />
                  <TextField variant="standard" label="City" fullWidth />
                  <TextField variant="standard" label="State" fullWidth />
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                  <TextField variant="standard" label="Address" fullWidth />
                  <TextField variant="standard" label="Address" fullWidth />
                  <TextField variant="standard" label="Address" fullWidth />
                  <TextField variant="standard" label="Address" fullWidth />
                  <TextField variant="standard" label="Address" fullWidth />
                  <TextField variant="standard" label="Address" fullWidth />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item lg={6} md={6} xs={12}>
                  <TextField variant="standard" label="Email ID" fullWidth />
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                  <TextField
                    variant="standard"
                    label="Phone Number"
                    fullWidth
                  />
                </Grid>
                {/* Add more fields as needed */}
              </Grid>
              {/* Buttons */}
              <Button variant="contained" fullWidth>
                Submit
              </Button>
            </form>
            <Typography variant="body2">
              Terms and Conditions | Privacy Policy
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Register;
