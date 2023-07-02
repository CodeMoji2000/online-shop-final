import { call, put } from "@redux-saga/core/effects";

import getBrandApi from "../../../api/getBrand.api";
import { getBrandDataResponse } from "../../action/Brand.action";


export function* getBrand() {
  const brand = yield call(getBrandApi);
  const obj = {};
  brand.forEach((element, index) => {
    obj[index] = {
      title: element.title,
      description: element.description,
      image: element.image
    };
  });
  yield put(getBrandDataResponse(brand));
}
