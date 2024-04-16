import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
} from "chart.js";
import { Bar, Line ,Pie} from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

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
