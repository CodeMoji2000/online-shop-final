import { GET_BRAND_DATA_REQUEST ,
    GET_BRAND_DATA_RESPONSE
 } from "../constant/types";

export const getBrandDataRequest = (params) => ({
    type: GET_BRAND_DATA_REQUEST,
    payload: { params },
  });
  
  export const getBrandDataResponse = (params) => ({
    type: GET_BRAND_DATA_RESPONSE,
    payload: { params },
  });