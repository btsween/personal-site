import React, { useState } from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import InterestForm from "./InterestForm";

function Calculator() {
  return (
    <div>
      <InterestForm />
      <div className="wrapper">
        <Line
          options={{ responsive: false }}
          data={{
            labels: ["label 1", "label 2", "label 3", "label 4"],
            datasets: [
              {
                label: "l",
                data: [48, 35, 73, 82],
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
