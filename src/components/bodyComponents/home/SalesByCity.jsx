// import React from "react";
import { Box } from "@mui/material";
import ApexCharts from "react-apexcharts";

export default function IssuedByDepartment() {
  const donutOption = {
    labels: ["Electrical", "Instrument", "Mechanical", "Fabrication"],
    legend: {
      position: "right",
      fontSize: "14",

      customLegendItems: [
        "Electrical <b>30.3%</b>",
        "Instrument <b>37.9%</b>",
        "Mechanical <b>9.0%</b>",
        "Fabrication <b>22.8%</b>",
      ],
      //   const total = data.reduce((sum, value) => sum + value, 0);
      // const percentages = data.map(value => ((value / total) * 100).toFixed(2) + '%');
    },
    title: {
      text: "Issued By Department",
    },
  };
  const donutSeries = [44, 55, 13, 33];

  return (
    <Box
      sx={{
        margin: 3,
        bgcolor: "white",
        borderRadius: 2,
        padding: 3,
        height: "100%",
      }}
    >
      <ApexCharts
        options={donutOption}
        series={donutSeries}
        type="pie"
        width="100%"
      />
    </Box>
  );
}
