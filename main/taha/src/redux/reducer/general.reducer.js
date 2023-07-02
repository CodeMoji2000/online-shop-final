import { GET_PUBLIC_DATA_RESPONSE } from "../constant/types";

const initialState = {
  publicData: {},
};

export default (state = initialState, action = {}) => {
  const { payload, type } = action;
  switch (type) {
    case GET_PUBLIC_DATA_RESPONSE:
      return {
        ...state,
        publicData: { ...payload.params },
      };

    default:
      return state;
  }
};
