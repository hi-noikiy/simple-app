import { put, call, takeEvery, delay } from "redux-saga/effects";
import ApiClient from "helpers/apiClient";
const lendbookApi = new ApiClient("http://localhost:3333/rate/btc");

function* fetchTradeData(action) {
  console.log(action);
  try {
    const result = yield call(fetch, "http://localhost:3333/rate/btc");
    const data = yield call(() => result.json());
    yield put({ type: "GET_TRADE_DATA_SUCCESS", payload: data });
  } catch (e) {
    yield put({ type: "GET_TRADE_DATA_FAILED", payload: e });
  }
  // console.log(result);
}
function* rootSaga() {
  yield takeEvery("GET_TRADE_DATA", fetchTradeData);
}

export default rootSaga;
