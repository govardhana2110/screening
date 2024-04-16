import React from "react";

const CommonTable = ({ data }) => {
  return (
    <div>
      {data && (
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((header, index) => {
                return <th key={index}>{header}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr>
                  {Object.keys(item).map((key) => {
                    return <td key={index}>{item[key]}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default CommonTable;
