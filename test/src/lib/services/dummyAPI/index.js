import baseService from "../commonService";

const dummyGet = () => {
 return baseService({
    url: "dummyjson.com/products/1",
    method: "GET",
  });
//   const options = {
//     url: "dummyjson.com/products/1",
//     method: "GET",
//   };
//   console.log("Request Object:", options); // Log request object for debugging
//   return baseService({ options });
};
export default dummyGet;
