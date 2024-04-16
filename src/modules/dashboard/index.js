import ChartComponent from "@/components/charts";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [chartData, setChartData] = useState(null); // Initialize chartData as null

  const getDummyData = async () => {
    try {
      const response = await axios.get("DUMMY API");
      if (response) {
        console.log(response);
        setChartData(response.data); // Update chartData with response data
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const setDummyDataFunction = () => {
    setChartData({
      labels: [
        "Hyderabad",
        "Bengaluru",
        "Chennai",
        "Delhi",
        "Kolkata",
        "Mumbai",
      ],
      datasets: [
        {
          label: "Employees",
          data: [617594, 18045, 153060, 106519, 105162, 95072],
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)",
            "rgba(255, 99, 132, 0.6)",
          ],
        },
      ],
    });
  };

  useEffect(() => {
    // Call either getDummyData() or setDummyDataFunction() based on your requirement
    // getDummyData();
    setDummyDataFunction();
  }, []);

  // Render the Chart component only if chartData is not null
  return (
    <div>
      {chartData && (
        <>
          <ChartComponent chartData={chartData} ></ChartComponent>
        </>
      )}
    </div>
  );
};

export default Dashboard;
