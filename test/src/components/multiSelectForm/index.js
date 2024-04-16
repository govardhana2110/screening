import React, { useEffect, useState } from "react";

const MultiSelectStepForm = ({ formFields, selectedForms, saveForm }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [step, setStep] = useState();
  const [formData, setFormData] = useState(formFields);

  const handleChange = (e, step, name) => {
    setFormData((prev) => ({
      ...prev,
      [step]: { ...prev[step], [name]: e.target.value },
    }));
  };

  useEffect(() => {
    setStep(Object.keys(formFields)[stepIndex]);
  }, [formFields, stepIndex]);

  useEffect(() => {
    renderForms();
  }, [selectedForms]);

  const renderForms = () => {
    if (formFields && step) {
      return (
        <>
          {" "}
          {selectedForms &&
            selectedForms.map((formType) => {
              return (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <h2>{formType}</h2>
                  {Object.keys(formData[formType]).map((field) => {
                    return (
                      <>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "row",
                          }}
                        >
                          <label>
                            {field}
                            <span style={{ color: "orangered" }}>*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData[formType][field]}
                            placeholder={`Enter ${field}`}
                            onChange={(e) => handleChange(e, formType, field)}
                          />
                        </div>
                      </>
                    );
                  })}
                </div>
              );
            })}{" "}
          <button style={{ width: "50%" }} onClick={handleSubmit}>
            Next
          </button>
        </>
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let err = [];
    selectedForms.map((selected) => {
      Object.keys(formData[selected]).map((item) => {
        if (formData[selected][item] === "") {
          err.push(item);
        }
      });
    });
    if (err.length) {
      let errorList = err.join("\n");
      alert(`Enter below fields \n${errorList}`);
      return false;
    } else {
      saveForm(formData);
    }
    setStepIndex((prev) => prev + 1);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>{renderForms()}</form>
    </div>
  );
};

export default MultiSelectStepForm;
