import React, { useState } from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import InterestForm from "./InterestForm";

function Calculator() {
  const [initialAmount, setInitialAmount] = useState("1000");
  const [monthlyAmount, setMonthlyAmount] = useState("500");
  const [timeInvested, setTimeInvested] = useState("45");
  const [returnRate, setReturnRate] = useState("8");

  return (
    <div>
      <InterestForm
        onChangeInitialAmount={setInitialAmount}
        onChangeMonthlyAmount={setMonthlyAmount}
        onChangeTimeInvested={setTimeInvested}
        onChangeReturnRate={setReturnRate}
        initialAmount={initialAmount}
        monthlyAmount={monthlyAmount}
        timeInvested={timeInvested}
        returnRate={returnRate}
      />
      <div className="wrapper">
        <Line
          options={{ responsive: false }}
          data={{
            labels: [1, 2, 3, 4],
            datasets: [
              {
                data: [88, 35, 73, 82],
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
