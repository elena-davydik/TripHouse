import { REQUEST_HOTELS, GET_HOTEL } from "./types";
import {
  actionGetHotelsSucceed,
  actionGetHotelsFailed,
  actionGetHotelSucceed,
  actionGetHotelFailed,
} from "./actions";

import { takeLatest, put, call } from "redux-saga/effects";
import { getPopularHotelsData, getHotelData } from "../../api/hotelsApi";

function* getPopularHotelsSaga() {
  try {
    const data = yield call(getPopularHotelsData);
    yield put(actionGetHotelsSucceed(data));
  } catch (error) {
    yield put(actionGetHotelsFailed(error));
  }
}

function* getHotelSaga(action) {
  try {
    const data = yield call(getHotelData, action.payload);
    yield put(actionGetHotelSucceed(data));
  } catch (error) {
    yield put(actionGetHotelFailed(error));
  }
}

export function* watchPopularHotelsSaga() {
  yield takeLatest(REQUEST_HOTELS, getPopularHotelsSaga);
  yield takeLatest(GET_HOTEL, getHotelSaga);
}
