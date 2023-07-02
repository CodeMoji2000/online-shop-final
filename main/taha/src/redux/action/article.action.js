import {
    GET_ARTICLE_DATA_REQUEST,
    GET_ARTICLE_DATA_RESPONSE,
  } from "../constant/types";
  
  export const getArticleDataRequest = (params) => ({
    type: GET_ARTICLE_DATA_REQUEST,
    payload: { params },
  });
  
  export const getArticleDataResponse = (params) => ({
    type: GET_ARTICLE_DATA_RESPONSE,
    payload: { params },
  });
  