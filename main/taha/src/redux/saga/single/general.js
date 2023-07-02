import { call, put } from "@redux-saga/core/effects";
import { GetPublicData } from "../../../API/general.api";
import { getPublicDataResponse } from "../../action/general.action";

export function* getPublicData() {
  const publicData = yield call(GetPublicData);

  const obj = {};
  publicData.forEach((element) => {
    obj[element.key] = {
      ...obj[element.key],
      [element.lang]: element.value.includes("{")
        ? JSON.parse(element.value)
        : element.value,
    };
  });
  yield put(getPublicDataResponse(obj));
}
