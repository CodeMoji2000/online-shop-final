import {
  GET_PUBLIC_DATA_REQUEST,
  GET_PUBLIC_DATA_RESPONSE,
} from "../constant/types";

export const getPublicDataRequest = (params) => ({
  type: GET_PUBLIC_DATA_REQUEST,
  payload: { params },
});

export const getPublicDataResponse = (params) => ({
  type: GET_PUBLIC_DATA_RESPONSE,
  payload: { params },
});
