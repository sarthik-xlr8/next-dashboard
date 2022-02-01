// import axios from "axios";
// import Revenue from "../constants";
// // import revenueData from "./revenue.json";
// export const requestRevenueData = (data) => async (dispatch) => {
//   dispatch({
//     type: Revenue.LOAD,
//   });
//   try {
//     const json = await axios.get("./revenue.json");
//     console.log(json);
//     dispatch({
//       type: Revenue.LOAD_SUCCESS,
//       revenueData: json.data,
//       isError: false,
//     });
//   } catch (err) {
//     dispatch({
//       type: Revenue.LOAD_SUCCESS,
//       revenueData: [],
//       isError: true,
//     });
//   }
// };
