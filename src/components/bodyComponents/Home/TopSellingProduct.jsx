// import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
export default function TopSellingProduct() {
  const products = [
    { name: "Hand glove",  quantity: 1000, },
    { name: "Eye-goggle",  quantity: 800,  },
    { name: "Safety Shoes",  quantity: 500, },
    { name: "Nose mask",  quantity: 400,  },
    { name: "Ear plug",  quantity: 300,  },
  ];
  return (
    <Box
      sx={{
        margin: 3,
        bgcolor: "white",
        borderRadius: 2,
        padding: 3,
        height: "95%",
      }}
    >
      <Typography variant="h6" fontWeight={"bold"} sx={{ mx: 3 }}>
        Top Item Issued
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bolder" }}>Name</TableCell>
            
              <TableCell sx={{ fontWeight: "bolder" }}>Quantity</TableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, id) => {
              return (
                <TableRow key={id}>
                  <TableCell>{product.name}</TableCell>
                  
                  <TableCell>{product.quantity}</TableCell>
                  
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
