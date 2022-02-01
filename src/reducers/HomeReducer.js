import Revenue from "../constants";

import revenueData from "../revenue.json";

const initialState = {
  revenue: revenueData.revenue,
};

// const homepageReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case Revenue.LOAD_SUCCESS:
//       return {
//         ...state,
//         revenueData: action.revenueData,
//       };
//     default:
//       return state;
//   }
// };

// export default homepageReducer;

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};
