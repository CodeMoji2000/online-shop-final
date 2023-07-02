import { INITIAL_CALL_REQUEST } from "../constant/types";

export const initialCallRequest = (params) => ({
  type: INITIAL_CALL_REQUEST,
  payload: { params },
});
