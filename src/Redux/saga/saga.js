import { put, takeLatest } from "redux-saga/effects"
import * as CommonConstants from "../../common/commonConstants";
function* pushDataToStore(action) {
    yield put({ type: CommonConstants.SUBMIT_SUCCESS, payload: action.payload })
}

function* formDataSaga() {
    yield takeLatest(CommonConstants.SUBMIT_ACTION, pushDataToStore);
}

export default formDataSaga;