import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import InterestForm from "./InterestForm";

function Calculator() {
  const [chartData, setChartData] = useState([88, 35, 73, 82]);

  return (
    <div>
      <InterestForm onSetChartData={setChartData} />
      <div className="wrapper">
        <Line
          options={{ responsive: false }}
          data={{
            labels: [1, 2, 3, 4],
            datasets: [
              {
                data: chartData,
                backgroundColor: ["rgba(255, 99, 132, 0.6)"],
                borderWidth: 3,
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

export default Calculator;
