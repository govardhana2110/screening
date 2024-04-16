import React, { useEffect, useState } from "react";

const MultiStepForm = ({ formFields }) => {
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
  }, [step]);

  const renderForms = () => {
    if (formFields && step) {
      return (
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',gap:'1rem'}}>
          {Object.keys(formFields[step]).map((field) => {
            return (
              <div style={{display:'flex',justifyContent:'space-between',flexDirection:'row'}}>
                <label>{field}<span style={{color:'orangered'}}>*</span></label>
                <input
                  type="text"
                  name="name"
                  value={formData[step][field]}
                  placeholder={`Enter ${field}`}
                  onChange={(e) => handleChange(e, step, field)}
                />
              </div>
            );
          })}
          <button style={{width:'50%'}} onClick={handleSubmit}>Next</button>
        </div>
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let err = [];
    Object.keys(formData[step]).map((item) => {
      if (formData[step][item] === "") {
        err.push(item);
      }
    });
    if (err.length) {
      let errorList = err.join("\n");
      alert(`Enter below fields \n${errorList}`);
      return false;
    }
    setStepIndex((prev) => prev + 1);
  };

  return (
    <div>
      <h2>{step}</h2>
      <form onSubmit={handleSubmit}>{renderForms()}</form>
    </div>
  );
};

export default MultiStepForm;
