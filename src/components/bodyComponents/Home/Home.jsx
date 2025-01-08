import { Component } from "react";
import { Box, Grid } from "@mui/material";

import UilReceipt from "@iconscout/react-unicons/icons/uil-receipt";
import UilBox from "@iconscout/react-unicons/icons/uil-box";
import UilTruck from "@iconscout/react-unicons/icons/uil-truck";
import UilCheckCircle from "@iconscout/react-unicons/icons/uil-check-circle";
import InfoCard from "../../subComponents/InfoCard";
import TotalItemIssued from "./TotalSales";
import IssuedByDepartment from "./SalesByCity";
import Channels from "./Channels";
import TopSellingProduct from "./TopSellingProduct";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = {};
    const cardComponent = [
      {
        icon: <UilBox size={60} color={"#F6F4EB"} />,
        title: "Total Items",
        subTitle: "1256",
        mx: 3,
        my: 0,
      },
      {
        icon: <UilTruck size={60} color={"#F6F4EB"} />,
        title: "In-stock",
        subTitle: "12",
        mx: 5,
        my: 0,
      },
      {
        icon: <UilCheckCircle size={60} color={"#F6F4EB"} />,
        title: "Item Issued",
        subTitle: "15",
        mx: 5,
        my: 0,
      },
      {
        icon: <UilReceipt size={60} color={"#F6F4EB"} />,
        title: "Out of stock",
        subTitle: "07",
        mx: 3,
        my: 0,
      },
    ];

    return (
      <Box
        sx={{
          margin: 0,
          // bgcolor: "grey",
          // borderRadius: 5,
          padding: 3,
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginX: 3,
            borderRadius: 2,
            padding: 0,
          }}
        >
          {cardComponent.map((card, index) => (
            <Grid item md={3} key={index}>
              <InfoCard card={card} />
            </Grid>
          ))}
        </Grid>

        <Grid container sx={{ marginX: 3 }}>
          <Grid item md={8}>
            <TotalItemIssued data={data} />
          </Grid>
          <Grid item md={4}>
            <IssuedByDepartment data={data} />
          </Grid>
        </Grid>

        <Grid container sx={{ margin: 3 }}>
          <Grid item md={6}>
            <Channels />
          </Grid>
          <Grid item md={6}>
            <TopSellingProduct />
          </Grid>
        </Grid>
      </Box>
    );
  }
}
