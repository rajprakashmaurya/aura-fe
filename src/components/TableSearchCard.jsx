import {
  Box,
  Chip,
  Container,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";

function TableSearchCard() {
  //   const [getData, setGetData] = useState([]);
  //   const getTableData = async () => {
  //     const res = await axios.get("http://localhost:8080/api/v1/user/user");
  //     // console.log("res", res.data.users);
  //     setGetData(res.data.users);
  //     console.log("log", getData);
  //   };

  //   useEffect((e) => {
  //     // e.preventDefault();
  //     getTableData();
  //   }, []);

  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/user/search?searchTerm=${keyword}`
      );

      setResults(response.data.users);
      console.log(results);
      setLoading(false);
    } catch (error) {
      console.error("Error searching:", error);
      setLoading(false);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          placeholder="Search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon onClick={handleSubmit} sx={{ cursor: "pointer" }} />
              </InputAdornment>
            ),
          }}
        />
      </form>

      <Box>
        <Table>
          <TableHead sx={{ backgroundColor: "#0DF5E3" }}>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Date & Time</TableCell>
              <TableCell>Hospital Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone No.</TableCell>
              <TableCell>City</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Pincode</TableCell>
              <TableCell>
                <Chip label="Status" />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results &&
              results.map((data, index) => (
                <TableRow key={index}>
                  <TableCell align="left">{index + 1}</TableCell>
                  <TableCell align="left">{data.hosRegDate}</TableCell>
                  <TableCell align="left">{data.hospitalName}</TableCell>
                  <TableCell align="left">{data.email}</TableCell>
                  <TableCell align="left">{data.address}</TableCell>
                  <TableCell align="left">{data.phoneNumber}</TableCell>
                  <TableCell align="left">{data.city}</TableCell>
                  <TableCell align="left">{data.state}</TableCell>
                  <TableCell align="left">{data.pincode}</TableCell>
                  <TableCell align="left">
                    <Chip label="is Active" />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
}

export default TableSearchCard;
