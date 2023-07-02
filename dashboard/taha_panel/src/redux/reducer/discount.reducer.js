import { GET_DISCOUNT_DATA_RESPONSE } from "../constant/types";

const initialState = {
  discount: {},
};

export default (state = initialState, action = {}) => {
  const { payload, type } = action;
  switch (type) {
    case GET_DISCOUNT_DATA_RESPONSE:
      return {
        ...state,
        discount: [ ...payload.params ],
      };

    default:
      return state;
  }
};