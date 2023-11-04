import {
  Box,
  Button,
  Container,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import TableCard from "./TableCard";
import Navbar from "./Navbar";

function DataTable() {
  return (
    <Box>
      <Navbar />
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ py: 2.5, px: 3 }}
        >
          <Typography variant="h5">Hospital Registrations</Typography>
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <TextField
              placeholder="search"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Box
              sx={{
                boxShadow: 2,
                borderRadius: 1,
                padding: "13px",
              }}
            >
              <FilterListIcon />
            </Box>
          </Box>
        </Stack>
        <TableCard />
      </Container>
    </Box>
  );
}

export default DataTable;
