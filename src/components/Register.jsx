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
            <form>
              <Grid container spacing={5}>
                <Grid item lg={6} md={6} xs={12} spacing={5}>
                  <TextField
                    variant="standard"
                    label="Hospital Name"
                    fullWidth
                  />
                  <TextField variant="standard" label="Address" fullWidth />
                  <TextField variant="standard" label="City" fullWidth />
                  <TextField variant="standard" label="State" fullWidth />
                  <TextField variant="standard" label="Pincode" fullWidth />
                  <TextField
                    variant="standard"
                    label=" Hospital Registration Date"
                    fullWidth
                  />
                  <TextField
                    variant="standard"
                    label="Number Of Ambulance available"
                    fullWidth
                  />
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                  <TextField variant="standard" label="Email ID" fullWidth />
                  <TextField
                    variant="standard"
                    label="Phone Number"
                    fullWidth
                  />
                  <TextField
                    variant="standard"
                    label="Hospital Registration Number"
                    fullWidth
                  />
                  <TextField
                    variant="standard"
                    label="Emergency-Ward Number"
                    fullWidth
                  />
                  <TextField
                    variant="standard"
                    label="Registration certificate Upload"
                    fullWidth
                  />
                  <Button variant="contained">Choose</Button>
                  <TextField
                    variant="standard"
                    label="Create Password"
                    fullWidth
                  />
                  <TextField
                    variant="standard"
                    label="Coniform Password"
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Box
                my={5}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Button variant="contained">Submit</Button>
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
