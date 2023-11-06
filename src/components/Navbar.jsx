import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import Logo1 from "../asserts/sicu-aura_logo-removebg 3.png";
import Logo2 from "../asserts/sicu-aura_logo-removebg 4.png";
import Avator from "../asserts/Ellipse 40.png";
import { useAuth } from "../context/authContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [auth, setAuth] = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    setIsLoggedIn(true);
    localStorage.removeItem("auth");
    Swal.fire({
      icon: "success",
      title: "User Logout successful",
      // text: "An error occurred during login.",
      showConfirmButton: true,
      confirmButtonText: "OK",
    });
  };

  const handeleHome = () => {
    navigate("/");
  };
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
          <Box display={"flex"} alignItems={"center"} onClick={handeleHome}>
            <img src={Logo1} alt="" />
            <img src={Logo2} alt="" />
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={4}>
            <img src={Avator} alt="" />
            {isLoggedIn ? (
              <Typography>{auth?.user?.hospitalName}</Typography>
            ) : (
              <Typography>Not user</Typography>
            )}

            <Button
              sx={{ backgroundColor: "#302A41", color: "white" }}
              variant="contained"
              onClick={handleLogout}
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
