import {UPLOAD_REQUEST} from "../constant/types";

export const uploadRequest = (params) => ({
    type: UPLOAD_REQUEST,
    payload: { params }
  })