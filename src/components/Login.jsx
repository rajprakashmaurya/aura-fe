import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

import HomeImage from "../asserts/homeImg.png.png";
import Logo from "../asserts/image 12.png";

function Login() {
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
                  />
                  <TextField variant="standard" label="Email Id" fullWidth />
                  <TextField variant="standard" label="Password" fullWidth />
                  <TextField
                    variant="standard"
                    label="Special Access Code"
                    fullWidth
                  />
                </Box>
              </Card>

              <Box
                my={5}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Button variant="contained" color="success">
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
