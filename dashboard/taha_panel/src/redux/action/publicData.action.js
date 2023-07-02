import {
  GET_PUBLIC_DATA_REQUEST,
  GET_PUBLIC_DATA_RESPONSE,
  EDIT_SLIDESHOW_REQUEST,
  EDIT_EXCLUSIVE_REQUEST,
  EDIT_FOOTER_REQUEST,
  EDIT_LISTOFAGENT_REQUEST,
} from "../constant/types";

export const getPublicDataRequest = (params) => ({
  type: GET_PUBLIC_DATA_REQUEST,
  payload: { params },
});

export const getPublicDataResponse = (params) => ({
  type: GET_PUBLIC_DATA_RESPONSE,
  payload: { params },
});
export const editSlideshowRequest = (params) => ({
  type: EDIT_SLIDESHOW_REQUEST,
  payload: { params }
})
export const editSlideshowResponse = (params) => ({
  type: EDIT_SLIDESHOW_REQUEST,
  payload: { params }
})
export const editExclusiveRequest = (params) => ({
  type: EDIT_EXCLUSIVE_REQUEST,
  payload: { params }
})
export const editFooterRequest = (params) => ({
  type: EDIT_FOOTER_REQUEST,
  payload: { params }
})
export const editListofAgent = (params) => ({
  type: EDIT_LISTOFAGENT_REQUEST,
  payload: { params }
})