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
import React from "react";

function TableCard() {
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
            <TableRow>
              <TableCell align="left">1</TableCell>
              <TableCell align="left">10/09/2000</TableCell>
              <TableCell align="left">Hospital</TableCell>
              <TableCell align="left">Email@gmail.com</TableCell>
              <TableCell align="left">Addethgxdjhkhj</TableCell>
              <TableCell align="left">1234567878</TableCell>
              <TableCell align="left">kolkata</TableCell>
              <TableCell align="left">West bengal</TableCell>
              <TableCell align="left">121212</TableCell>
              <TableCell align="left">
                <Chip label="is Active" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">1</TableCell>
              <TableCell align="left">10/09/2000</TableCell>
              <TableCell align="left">Hospital</TableCell>
              <TableCell align="left">Email@gmail.com</TableCell>
              <TableCell align="left">Addethgxdjhkhj</TableCell>
              <TableCell align="left">1234567878</TableCell>
              <TableCell align="left">kolkata</TableCell>
              <TableCell align="left">West bengal</TableCell>
              <TableCell align="left">121212</TableCell>
              <TableCell align="left">is active</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
}

export default TableCard;
