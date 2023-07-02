import get from "lodash"
import { call, put } from "@redux-saga/core/effects";
import editFooterApi from "../../../api/footer.api";
import { editListofAgent } from "../../action/publicData.action";




export function* listofAgent(params) {

    params=params.payload
    console.log(params)
    let editListofAgentResponse = yield call(editListofAgent,params);
    console.log(editListofAgentResponse)
    if (editListofAgentResponse=="done") {
      alert("با موفقیت انجام شد");
      window.location.reload();
    }
  };