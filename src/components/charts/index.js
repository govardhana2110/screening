import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

const ChartComponent = ({ chartData }) => {
  return (
    <div className="chart">
      <Bar
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: true,
              position: "right",
            },
          },
          scales: {
            x: {
              type: "category",
              title: {
                display: true,
                text: "Cities",
              },
            },
            y: {
              title: {
                display: true,
                text: "Employees",
              },
            },
          },
        }}
      />

      <Line
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: true,
              position: "right",
            },
          },
          scales: {
            x: {
              type: "category",
              title: {
                display: true,
                text: "Cities",
              },
            },
            y: {
              title: {
                display: true,
                text: "Employees",
              },
            },
          },
        }}
      />

      <Pie
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: true,
              position: "right",
            },
          },
        }}
      />
    </div>
  );
};

export default ChartComponent;
