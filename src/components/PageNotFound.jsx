import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <Box textAlign={"center"} mt={5}>
      <Container>
        <Typography>Page Not Found</Typography>
        <Typography variant="h1">404</Typography>
        <Button variant="contained" onClick={handleClick}>
          Home
        </Button>
      </Container>
    </Box>
  );
};

export default PageNotFound;
