import get from "lodash"
import { call, put } from "@redux-saga/core/effects";
import editFooterApi from "../../../api/footer.api";




export function* editFooter(params) {

    params=params.payload
    console.log(params)
    let editFooterResponse = yield call(editFooterApi,params);
    console.log(editFooterResponse)
    if (editFooterResponse=="done") {
      alert("با موفقیت انجام شد");
      window.location.reload();
    }
      };