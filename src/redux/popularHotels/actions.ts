import {
  REQUEST_HOTELS,
  REQUEST_HOTELS_SUCCEED,
  REQUEST_HOTELS_FAILED,
  CLEAR_DATA,
  GET_HOTEL,
  GET_HOTEL_SUCCEED,
  GET_HOTEL_FAILED,
  HotelsPayloadType,
  ActionType,
} from "./types";

export const actionGetHotelsRequested = (): ActionType => ({
  type: REQUEST_HOTELS,
});

export const actionClearData = (): ActionType => ({
  type: CLEAR_DATA,
});

export const actionGetHotelsSucceed = (
  data: HotelsPayloadType
): ActionType => ({
  type: REQUEST_HOTELS_SUCCEED,
  payload: data,
});

export const actionGetHotelsFailed = (error: Error): ActionType => ({
  type: REQUEST_HOTELS_FAILED,
  payload: error,
});

export const actionGetHotelRequested = (): ActionType => ({
  type: GET_HOTEL,
});

export const actionGetHotelSucceed = (data: HotelsPayloadType): ActionType => ({
  type: GET_HOTEL_SUCCEED,
  payload: data,
});

export const actionGetHotelFailed = (error: Error): ActionType => ({
  type: GET_HOTEL_FAILED,
  payload: error,
});
