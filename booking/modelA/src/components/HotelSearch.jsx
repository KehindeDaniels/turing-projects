import React, { useState } from "react";
import { searchHotels } from "../api/amadeus";
import { useBooking } from "../context/BookingContext";

const HotelSearch = () => {
  const [searchParams, setSearchParams] = useState({
    cityCode: "",
    checkInDate: "",
    checkOutDate: "",
    adults: 1,
  });
  const { dispatch } = useBooking();

  const handleInputChange = (e) => {
    setSearchParams({
      ...searchParams,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = async () => {
    try {
      const hotels = await searchHotels(searchParams);
      dispatch({ type: "SET_HOTELS", payload: hotels });
    } catch (error) {
      console.error("Failed to search hotels", error);
    }
  };

  return (
    <div>
      <h2>Search Hotels</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          type="text"
          name="cityCode"
          placeholder="City Code"
          value={searchParams.cityCode}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="checkInDate"
          value={searchParams.checkInDate}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="checkOutDate"
          value={searchParams.checkOutDate}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="adults"
          placeholder="Number of Adults"
          value={searchParams.adults}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default HotelSearch;
