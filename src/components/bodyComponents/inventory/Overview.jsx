import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  // TableHead,
  TableRow,
  Typography,
} from "@mui/material";


export default function Overview() {
  return (
    <Box>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Total Item</TableCell>
              <TableCell align="right">
                <Typography variant="subtitle1" fontWeight="bold">
                  15226
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Today Issued</TableCell>
              <TableCell align="right">
                <Typography variant="subtitle1" fontWeight="bold">
                  5241
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Yesterday Issued</TableCell>
              <TableCell align="right">
                <Typography variant="subtitle1" fontWeight="bold">
                  3652
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Total Issued</TableCell>
              <TableCell align="right">
                <Typography variant="subtitle1" fontWeight="bold">
                  11425
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Item In-stock</TableCell>
              <TableCell align="right">
                <Typography variant="subtitle1" fontWeight="bold">
                  6547
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Items Out-of-stock</TableCell>
              <TableCell align="right">
                <Typography variant="subtitle1" fontWeight="bold">
                  9562
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
