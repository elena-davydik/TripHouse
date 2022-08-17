import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { HeaderForPages } from "../components/UI/HeaderForPages";
import {
  HotelInfo,
  HotelContent,
  HotelPhoto,
  HotelDescription,
  HotelName,
  HotelLocation,
} from "./hotel-styles";
import { Footer } from "../components/Footer/index";
import { useDispatch } from "react-redux";
import { actionGetHotelRequested } from "../redux/popularHotels/actions";

export const Hotel = () => {
  const location: any = useLocation();
  // const params: any = useParams();
  const [data, setData] = useState(location.state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!location.state) {
      dispatch(actionGetHotelRequested());
      // fetch(`https://fe-student-api.herokuapp.com/api/hotels${params.id}`).then(
      //   (response) => response.json().then((data) => setData(data))
      // );
      setData(data);
    }
  }, [location.state, dispatch, data]);

  return (
    <div>
      <HeaderForPages />

      <HotelInfo>
        <HotelContent className="container block">
          <HotelPhoto src={data?.imageUrl} alt={data?.name} />
          <HotelDescription>
            <HotelName>{data?.name}</HotelName>
            <HotelLocation>
              {data?.city}, {data?.country}
            </HotelLocation>
          </HotelDescription>
        </HotelContent>
      </HotelInfo>

      <Footer />
    </div>
  );
};
