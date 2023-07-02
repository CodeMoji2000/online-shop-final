import { GET_USER_DATA_RESPONSE } from "../constant/types";

const initialState = {
  userData: {},
};

export default (state = initialState, action = {}) => {
  const { payload, type } = action;
  switch (type) {
    case GET_USER_DATA_RESPONSE:
      return {
        ...state,
        userData: { ...payload.params },
      };

    default:
      return state;
  }
};
