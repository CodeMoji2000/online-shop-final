import get from "lodash"
import { call } from "@redux-saga/core/effects";
import exclusiveApi from "../../../api/exclusive.api";



export function* editExclusive(params) {
    params=params.payload
    console.log(params)
    let editExclusiveResponse = yield call(exclusiveApi,params);
    console.log(editExclusiveResponse)
    if (editExclusiveResponse=="done") {
      alert("با موفقیت انجام شد")
        window.location.reload();
      }
};