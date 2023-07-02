import { GET_PHONE_ALREADY_EXIST_REQUEST } from "../constant/types";

const initialState = {
  phoneAlreadyExists: {},
};
export default (state = initialState, action = {}) => {
  const { payload, type } = action;
  switch (type) {
    case GET_PHONE_ALREADY_EXIST_REQUEST:
      return {
        ...state,
        phoneAlreadyExists: payload.phoneAlreadyExists,
      };

    default:
      return state;
  }
};
