import React from "react";

const LoginComponent = () => {
  const arr = [1, 2, 3, 3, 4, 4, 5, 5, 6, 7];
  React.useEffect(() => {
    const mapRes = arr.map((item) => item * 2);
    const forEachRes = arr.forEach((item) => item * 2);
    const filterRes = arr.filter((item) => item % 2 === 0);
    const reduceRes = arr.reduce((sum, item) => sum + item, 0);
    const findRes = arr.find((item) => item % 2 === 0);
    const someRes = arr.some((item) => item % 3 === 0);
    const everyRes = arr.every((item) => item % 2 === 0);
    const findIndexRes = arr.findIndex(item => item === 2);
    const includesRes = arr.includes(9);
    console.log(
      mapRes,
      forEachRes,
      filterRes,
      reduceRes,
      findRes,
      someRes,
      everyRes,
      findIndexRes,
      includesRes
    );
  }, []);
  return <div></div>;
};
export default LoginComponent;
