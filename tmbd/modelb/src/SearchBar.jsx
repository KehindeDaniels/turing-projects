// src/SearchBar.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const TMDB_API_KEY = "YOUR_TMDB_API_KEY"; // replace with your TMDB API key
const TMDB_API_URL = "https://api.themoviedb.org/3/search/movie";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const debounceTimeoutId = React.useRef(null);

  const handleSearch = async (q) => {
    if (!q) return;
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(TMDB_API_URL, {
        params: {
          api_key: "5dddfd597d087157b4d116f96d618309",
          query: q,
        },
      });
      setMovies(response.data.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    if (debounceTimeoutId.current) {
      clearTimeout(debounceTimeoutId.current);
    }
    debounceTimeoutId.current = setTimeout(() => {
      handleSearch(e.target.value);
    }, 500);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <input
        type="search"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a movie"
        className="w-full p-2 pl-10 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-b focus:outline-none focus:border-blue-500 focus:bg-white"
      />
      {loading ? (
        <p className="text-gray-600 mt-2">Loading...</p>
      ) : error ? (
        <p className="text-red-600 mt-2">{error}</p>
      ) : movies.length === 0 && query ? (
        <p className="text-gray-600 mt-2">No movies match the query</p>
      ) : (
        <ul className="mt-2">
          {movies.map((movie) => (
            <li key={movie.id} className="py-2">
              <div className="flex">
                <img
                  src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                  alt={movie.title}
                  className="w-12 h-16 mr-4"
                />
                <div>
                  <h2 className="text-lg font-bold">{movie.title}</h2>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
