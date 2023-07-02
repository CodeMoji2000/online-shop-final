import { call, put } from "@redux-saga/core/effects";
import { GetPublicData } from "../../../API/article.api";
import { getPublicDataResponse } from "../../action/article.action";

export function* getPublicData() {
  const publicData = yield call(GetPublicData);

  const obj = {};
  publicData.forEach((element) => {
    obj[element.key] = {
      [element.lang]: element.value.includes("{")
        ? JSON.parse(element.value)
        : element.value,
    };
  });
  yield put(getPublicDataResponse(obj));
}
