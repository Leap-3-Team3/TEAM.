import axios from "axios";
interface Props {
  url: String;
  method: String;
  data: String;
}
export const sendRequest = async ({ url, method, data }: Props) => {
  console.log(process.env.DUMMY_BASE_URL);
  const request_url = process.env.DUMMY_BASE_URL + url;

//   const response = await axios({
//     url: request_url,
//     method,
//     headers: {
//       "app-id": process.env.REACT_APP_APP_ID,
//       "Content-type": "application/json",
//     },
//     data,
//   });

//   console.log(response);
};
