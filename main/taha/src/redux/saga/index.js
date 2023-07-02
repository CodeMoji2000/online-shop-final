import { takeLatest } from "redux-saga/effects";
import {
  GET_PUBLIC_DATA_REQUEST,
  INITIAL_CALL_REQUEST,
} from "../constant/types";
import { getPublicData } from "./single/general";
import { initialCall } from "./single/initial";

export default function* root() {
  //INITIAL

  yield takeLatest(INITIAL_CALL_REQUEST, initialCall);

  //general
  yield takeLatest(GET_PUBLIC_DATA_REQUEST, getPublicData);
}
