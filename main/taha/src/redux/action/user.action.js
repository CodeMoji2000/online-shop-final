import { GET_USER_DATA_RESPONSE } from "../constant/types";

export const getUserDataResponse = (params) => ({
  type: GET_USER_DATA_RESPONSE,
  payload: { params },
});
