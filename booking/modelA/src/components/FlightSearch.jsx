import React, { useState, useEffect } from "react";
import { searchFlights, fetchAirports } from "../api/amadeus";
import { useBooking } from "../context/BookingContext";

const FlightSearch = () => {
  const [searchParams, setSearchParams] = useState({
    originLocationCode: "",
    destinationLocationCode: "",
    departureDate: "",
    returnDate: "",
    adults: 1,
  });
  const [airports, setAirports] = useState([]);
  const { dispatch } = useBooking();

  useEffect(() => {
    const loadAirports = async () => {
      try {
        const data = await fetchAirports("major"); // 'major' is just a placeholder, specify as needed
        setAirports(data.data);
      } catch (error) {
        console.error("Failed to load airports", error);
      }
    };

    loadAirports();
  }, []);

  const handleInputChange = (e) => {
    setSearchParams({
      ...searchParams,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Search Flights</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <label>
          From:
          <select
            name="originLocationCode"
            value={searchParams.originLocationCode}
            onChange={handleInputChange}
          >
            {airports.map((airport) => (
              <option key={airport.iataCode} value={airport.iataCode}>
                {airport.name} ({airport.iataCode})
              </option>
            ))}
          </select>
        </label>
        <label>
          To:
          <select
            name="destinationLocationCode"
            value={searchParams.destinationLocationCode}
            onChange={handleInputChange}
          >
            {airports.map((airport) => (
              <option key={airport.iataCode} value={airport.iataCode}>
                {airport.name} ({airport.iataCode})
              </option>
            ))}
          </select>
        </label>
        <input
          type="date"
          name="departureDate"
          value={searchParams.departureDate}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="returnDate"
          value={searchParams.returnDate}
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

export default FlightSearch;
