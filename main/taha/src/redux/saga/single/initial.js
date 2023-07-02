import { call, put } from "@redux-saga/core/effects";
import { initialCallRequest } from "../../action/inital.action";
import { getPublicData } from "./general";

export function* initialCall() {
  global.showLoader();
  yield call(getPublicData);

  global.hideLoader();
}
