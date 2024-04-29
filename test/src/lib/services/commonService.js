import axios from "axios";

const client = axios.create({
  baseURL:`${process.env.BASE_URL}`,
  validateStatus: (status) => status >= 200 && status < 300,
});
console.log(process.env.BASE_URL)
const baseService = async ( options ) => {
  const onSuccess = (response) => {
    return Promise.resolve(response);
  };
  const onError = (err) => {
    return Promise.reject(err);
  };
//   const commonHEaders = { type: "text" };
  try {
    const response = await client({
      ...options,
    //   headers: { ...options.headers, ...commonHEaders },
    });
    return onSuccess(response);
  } catch (err) {
    return onError(err);
  }
};
export default baseService;
