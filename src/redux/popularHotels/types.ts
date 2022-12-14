export const REQUEST_HOTELS = "REQUEST_HOTELS";
export const REQUEST_HOTELS_SUCCEED = "REQUEST_HOTELS_SUCCEED";
export const REQUEST_HOTELS_FAILED = "REQUEST_HOTELS_FAILED";
export const CLEAR_DATA = "CLEAR_DATA";
export const GET_HOTEL = "GET_HOTEL";
export const GET_HOTEL_SUCCEED = "GET_HOTEL_SUCCEED";
export const GET_HOTEL_FAILED = "GET_HOTEL_FAILED";

export type THotel = {
  id: string;
  name: string;
  city: string;
  country: string;
  imageUrl: string;
};

export type ActionType = {
  type:
    | typeof REQUEST_HOTELS
    | typeof REQUEST_HOTELS_SUCCEED
    | typeof REQUEST_HOTELS_FAILED
    | typeof CLEAR_DATA
    | typeof GET_HOTEL
    | typeof GET_HOTEL_SUCCEED
    | typeof GET_HOTEL_FAILED;
  payload?: HotelsPayloadType | Error;
};

export type HotelsPayloadType = THotel[];

export type StateType = {
  data: HotelsPayloadType | null;
  hotelData: HotelsPayloadType | null;
  error: string | null;
  isLoading: boolean;
};

export const initialHotelsState = {
  data: null,
  hotelData: null,
  error: null,
  isLoading: false,
};

export type HotelsStateType = {
  popularHotels: StateType;
};
