import React from "react";
import {
  Box,
  Chip,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

function TableCard({ getData }) {
  return (
    <Container>
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
            {getData &&
              getData.map((data, index) => (
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

export default TableCard;
