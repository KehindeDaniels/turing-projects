import axios from "axios";

const API_KEY = "BjOMhuUuL7X2GiyLUzqulZP3Y5BC4G7R";

const amadeus = axios.create({
  baseURL: "https://api.amadeus.com/v1",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const searchFlights = async (params) => {
  try {
    const response = await amadeus.get("/shopping/flight-offers", { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching flights:", error);
    throw error;
  }
};

export const searchHotels = async (params) => {
  try {
    const response = await amadeus.get("/shopping/hotel-offers", { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching hotels:", error);
    throw error;
  }
};

export const fetchAirports = async (keyword) => {
  try {
    const response = await amadeus.get(`/reference-data/locations`, {
      params: {
        keyword: keyword,
        subType: "AIRPORT,CITY",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching airport data:", error);
    throw error;
  }
};
