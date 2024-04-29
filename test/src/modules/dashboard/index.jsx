import ChartComponent from "../../components/chart/index.jsx";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DrangAndDrop from "../../components/dragAndDrop/index.jsx";
import MultiStepForm from "../../components/multistepForm/index.js";
import MultiSelectStepForm from "../../components/multiSelectForm/index.js";
import NetworkGraph from "../../components/d3Sample/index.js";
// import { useDispatch, useSelector } from "react-redux";
import LoginComponent from "../login/index.jsx";

const Dashboard = () => {
  const [chartData, setChartData] = useState(null);
  const [selectedForms, setSelectedForms] = useState([]);
  const [formFields, setFormFields] = useState({
    personalDetails: { Name: "", Email: "", Phone: "", Address: "" },
    educationDetails: { Level: "", Institute: "", Passed: "", Percentage: "" },
    addressDetails: { Line1: "", State: "", Country: "" },
  });
  // const dispatch = useDispatch();
  // const storeData = useSelector((state) => state);
  const [pageNo, setPageNo] = useState(0);

  const getDummyData = async () => {
    try {
      const response = await axios.get("DUMMY API");
      if (response) {
        console.log(response);
        setChartData(response.data);
        //Set the state for redux slice
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getReduxData = async () => {
    try {
      const response = await axios.get("API URL");
      if (response.success) {
        // dispatch(setSampleReduxStatus(response));
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
    let fieldsArr = [...selectedForms];
    !fieldsArr.includes(Object.keys(formFields)[0]) &&
      fieldsArr.push(Object.keys(formFields)[0]);
    setSelectedForms([...fieldsArr]);
  }, []);
  const optionSelect = (e, option) => {
    let itemsArr = [...selectedForms];
    if (e.target.checked) {
      !itemsArr.includes(option) && itemsArr.push(option);
    } else {
      let itemIndex = itemsArr.indexOf(option);
      itemsArr.splice(itemIndex, 1);
    }
    setSelectedForms([...itemsArr]);
  };
  const saveForm = async (data) => {
    try {
      const response = await axios.post("POST URL", data);
      if (response.success) {
        alert("success");
      } else {
        alert("fail");
      }
    } catch (err) {
      alert(err);
    }
  };
  const nextClick = () => {
    setPageNo((prev) => prev + 1);
  };
  const prevClick = () => {
    setPageNo((prev) => prev - 1);
  };
  useEffect(() => {
    // getReduxData();
  }, [pageNo]);
  return (
    <>
      <div>
        <LoginComponent> </LoginComponent>
        {/* <DrangAndDrop></DrangAndDrop> */}
        {/* {chartData && (
        <>
          <ChartComponent chartData={chartData} ></ChartComponent>
        </>
      )} */}
        <MultiStepForm formFields={formFields}></MultiStepForm>
        <h2>Select Options</h2>
        {Object.keys(formFields).map((formsKey) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <input
                type="checkbox"
                value="Option 1"
                checked={selectedForms.includes(formsKey)}
                onChange={(e) => optionSelect(e, formsKey)}
              />
              <label>{formsKey}</label>
            </div>
          );
        })}
        <MultiSelectStepForm
          formFields={formFields}
          selectedForms={selectedForms}
          saveForm={saveForm}
        ></MultiSelectStepForm>
      </div>
      <NetworkGraph></NetworkGraph>
      {/* {storeData &&
        storeData.data.map((item) => {
          return <div>{item}</div>;
        })} */}
      <button onClick={nextClick}>Next</button>
      <button onClick={prevClick}>Prev</button>
    </>
  );
};

export default Dashboard;
