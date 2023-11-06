import {
  Box,
  Container,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import TableCard from "./TableCard";
import Navbar from "./Navbar";
import axios from "axios";
import { useAuth } from "../context/authContext";

function DataTable() {
  const [auth, setAuth] = useAuth();
  //GET DATA
  const [getData, setGetData] = useState([]);

  // SEARCH
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);

  //get all data
  const getTableData = async () => {
    const res = await axios.get("http://localhost:8080/api/v1/user/user");
    if (!getData) {
      alert("No data available");
    }
    // console.log("res", res.data.users);
    setGetData(res.data.users);

    console.log("log", getData);
  };

  useEffect((e) => {
    getTableData();
  }, []);

  //SEARCH
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/user/search?searchTerm=${keyword}`
      );

      setGetData(response.data.users);

      setLoading(false);
    } catch (error) {
      console.error("Error searching:", error);
      setLoading(false);
    }
  };

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
            <form onSubmit={handleSubmit}>
              <TextField
                placeholder="search"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon
                        onClick={handleSubmit}
                        sx={{ cursor: "pointer" }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </form>

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
        <TableCard getData={getData} />
      </Container>
    </Box>
  );
}

export default DataTable;
