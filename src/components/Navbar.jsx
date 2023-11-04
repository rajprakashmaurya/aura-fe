import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Logo1 from "../asserts/sicu-aura_logo-removebg 3.png";
import Logo2 from "../asserts/sicu-aura_logo-removebg 4.png";
import Avator from "../asserts/Ellipse 40.png";

function Navbar() {
  return (
    <Box
      sx={{
        color: "white",
        height: "50px",
        backgroundColor: "#201A31",
        padding: "15px",
      }}
    >
      <Container>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box display={"flex"} alignItems={"center"}>
            <img src={Logo1} alt="" />
            <img src={Logo2} alt="" />
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={4}>
            <img src={Avator} alt="" />
            <Typography>Alex RobinHood</Typography>

            <Button
              sx={{ backgroundColor: "#302A41", color: "white" }}
              variant="contained"
            >
              Logout
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;
