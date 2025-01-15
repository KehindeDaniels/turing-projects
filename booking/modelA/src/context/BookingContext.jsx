import React, { createContext, useContext, useReducer } from "react";

const BookingContext = createContext();

const initialState = {
  flights: [],
  hotels: [],
  bookings: [],
};

const bookingReducer = (state, action) => {
  switch (action.type) {
    case "SET_FLIGHTS":
      return { ...state, flights: action.payload };
    case "SET_HOTELS":
      return { ...state, hotels: action.payload };
    case "ADD_BOOKING":
      return { ...state, bookings: [...state.bookings, action.payload] };
    default:
      return state;
  }
};

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  return (
    <BookingContext.Provider value={{ state, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);
