import React, { useState } from "react";
import CanvasJSReact from "./canvasjs.react";
import Notepad from "./Notepad";

//var CanvasJSReact = require('./canvasjs.react');
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function SalesReport() {
  const options = {
    height: 300,
    theme: "light2",
    animationEnabled: true,
    title: {
      text: "Units Sold VS Profit",
    },
    subtitles: [
      {
        text: "Click Legend to Hide or Unhide Data Series",
      },
    ],
    axisX: {
      title: "States",
    },
    axisY: {
      title: "Units Sold",
      titleFontColor: "#6D78AD",
      lineColor: "#6D78AD",
      labelFontColor: "#6D78AD",
      tickColor: "#6D78AD",
    },
    axisY2: {
      title: "Profit in USD",
      titleFontColor: "#51CDA0",
      lineColor: "#51CDA0",
      labelFontColor: "#51CDA0",
      tickColor: "#51CDA0",
    },
    toolTip: {
      shared: true,
    },
    legend: {
      cursor: "pointer",
    },
    data: [
      {
        type: "spline",
        name: "Units Sold",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "#,##0 Units",
        dataPoints: [
          { x: new Date(2017, 0, 1), y: 120 },
          { x: new Date(2017, 1, 1), y: 135 },
          { x: new Date(2017, 2, 1), y: 144 },
          { x: new Date(2017, 3, 1), y: 103 },
          { x: new Date(2017, 4, 1), y: 93 },
          { x: new Date(2017, 5, 1), y: 129 },
          { x: new Date(2017, 6, 1), y: 143 },
          { x: new Date(2017, 7, 1), y: 156 },
          { x: new Date(2017, 8, 1), y: 122 },
          { x: new Date(2017, 9, 1), y: 106 },
          { x: new Date(2017, 10, 1), y: 137 },
          { x: new Date(2017, 11, 1), y: 142 },
        ],
      },
      {
        type: "spline",
        name: "Profit",
        axisYType: "secondary",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "$#,##0.#",
        dataPoints: [
          { x: new Date(2017, 0, 1), y: 19034.5 },
          { x: new Date(2017, 1, 1), y: 20015 },
          { x: new Date(2017, 2, 1), y: 27342 },
          { x: new Date(2017, 3, 1), y: 20088 },
          { x: new Date(2017, 4, 1), y: 20234 },
          { x: new Date(2017, 5, 1), y: 29034 },
          { x: new Date(2017, 6, 1), y: 30487 },
          { x: new Date(2017, 7, 1), y: 32523 },
          { x: new Date(2017, 8, 1), y: 20234 },
          { x: new Date(2017, 9, 1), y: 27234 },
          { x: new Date(2017, 10, 1), y: 33548 },
          { x: new Date(2017, 11, 1), y: 32534 },
        ],
      },
    ],
  };
  return (
    <>
      <div className="salesreport">
        <div className="row">
          <div className="col-xl-10 col-lg-9 col-md-8  p-3">
            <h4 style={{ color: "darkgrey", fontWeight: 400 }} className="m-2">
              {" "}
              <strong className="title">Sales Report</strong> September 2020
            </h4>
            <CanvasJSChart options={options} />
          </div>{" "}
          <div className="col-xl-2 col-lg-3 col-md-4 rqbox d-flex flex-column justify-content-center">
            <h4
              className="m-2"
              style={{
                color: "white",
                fontWeight: 300,
              }}
            >
              17 Sep
            </h4>
            <div className="box revenue  ">
              <h5 style={{ fontWeight: 400 }}> $1,204.33</h5>
              <h6 style={{ fontWeight: 300 }}>Revenue</h6>
            </div>
            <div className="box quoations ">
              <h5 style={{ fontWeight: 400 }}>33</h5>
              <h6 style={{ fontWeight: 300 }}>Quotations</h6>
            </div>
          </div>
        </div>
      </div>
      <Notepad></Notepad>
    </>
  );
}
export default SalesReport;
