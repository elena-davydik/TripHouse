import {
  StateType,
  initialHotelsState,
  ActionType,
  REQUEST_HOTELS,
  REQUEST_HOTELS_SUCCEED,
  REQUEST_HOTELS_FAILED,
  GET_HOTEL,
  GET_HOTEL_SUCCEED,
  GET_HOTEL_FAILED,
  CLEAR_DATA,
} from "./types";

export const PopularHotelsReducer = (
  state: StateType = initialHotelsState,
  action: ActionType
) => {
  switch (action.type) {
    case REQUEST_HOTELS:
    case GET_HOTEL:
      return { ...state, isLoading: true };
    case REQUEST_HOTELS_SUCCEED:
      return { ...state, data: action.payload, isLoading: false };
    case GET_HOTEL_SUCCEED:
      return { ...state, hotelData: action.payload, isLoading: false };
    case REQUEST_HOTELS_FAILED:
    case GET_HOTEL_FAILED:
      return { ...state, arror: action.payload, isLoading: false };
    case CLEAR_DATA:
      return initialHotelsState;
    default:
      return state;
  }
};
