import { call, put } from "@redux-saga/core/effects";
import { initialCallRequest } from "../../action/initialCall.action";
import { getPublicData } from "./publicData";
import { getBrand } from "./brand";
import { getProduct } from "./product";
import { getDiscount } from "./discount";
export function* initialCall() {
  global.showLoader();
  yield call(getPublicData);
  yield call(getBrand);
  yield call(getProduct);
  yield call(getDiscount);
  global.hideLoader();
}
