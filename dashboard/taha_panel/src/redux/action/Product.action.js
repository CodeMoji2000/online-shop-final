import { GET_PRODUCT_DATA_REQUEST ,
    GET_PRODUCT_DATA_RESPONSE
 } from "../constant/types";

export const getProductRequest = (params) => ({
    type: GET_PRODUCT_DATA_REQUEST,
    payload: { params },
  });
  
  export const getProductResponse = (params) => ({
    type: GET_PRODUCT_DATA_RESPONSE,
    payload: { params },
  });