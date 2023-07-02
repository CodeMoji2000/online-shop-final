import { GET_BRAND_DATA_RESPONSE } from "../constant/types";

const initialState = {
  brand: {},
};

export default (state = initialState, action = {}) => {
  const { payload, type } = action;
  switch (type) {
    case GET_BRAND_DATA_RESPONSE:
      return {
        ...state,
        brand: [ ...payload.params ],
      };

    default:
      return state;
  }
};