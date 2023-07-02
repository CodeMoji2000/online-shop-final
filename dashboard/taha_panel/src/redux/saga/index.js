import { takeLatest } from "redux-saga/effects";
import { editListofAgent } from "../action/publicData.action";
import { EDIT_EXCLUSIVE_REQUEST, EDIT_FOOTER_REQUEST, EDIT_LISTOFAGENT_REQUEST, EDIT_SLIDESHOW_REQUEST, GET_BRAND_DATA_REQUEST, GET_DISCOUNT_DATA_REQUEST, GET_PRODUCT_DATA_REQUEST, GET_PUBLIC_DATA_REQUEST,GET_STUCK_DATA_REQUEST,INITIAL_CALL_REQUEST,UPLOAD_REQUEST } from "../constant/types";
import { getBrand } from "./single/brand";
import { getDiscount } from "./single/discount";
import { editSlideshow } from "./single/editSlideshow";
import { editExclusive } from "./single/exclusive";
import { editFooter } from "./single/footer";
import { initialCall } from "./single/initialCall";
import { getProduct } from "./single/product";
import { getPublicData } from "./single/publicData";
import { upload } from "./single/upload";



export default function* root() {
  yield takeLatest(INITIAL_CALL_REQUEST, initialCall);
  yield takeLatest(GET_PUBLIC_DATA_REQUEST, getPublicData);
  yield takeLatest(GET_PRODUCT_DATA_REQUEST, getProduct);
  yield takeLatest(GET_BRAND_DATA_REQUEST, getBrand);
  // yield takeLatest(GET_DISCOUNT_DATA_REQUEST, getDiscount);
  yield takeLatest(EDIT_SLIDESHOW_REQUEST, editSlideshow);
  yield takeLatest(EDIT_EXCLUSIVE_REQUEST, editExclusive);
  yield takeLatest(EDIT_FOOTER_REQUEST, editFooter);
  yield takeLatest(EDIT_LISTOFAGENT_REQUEST, editListofAgent);
  yield takeLatest(UPLOAD_REQUEST, upload);

}
