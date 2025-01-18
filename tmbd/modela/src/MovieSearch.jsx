// src/MovieSearch.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function MovieSearch() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "5dddfd597d087157b4d116f96d618309"; // Replace with your TMDB API key
  const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

  useEffect(() => {
    const fetchMovies = async () => {
      if (query.trim() === "") return;
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${API_URL}${query}`);
        setMovies(response.data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    const timeoutId = setTimeout(fetchMovies, 500);
    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Movie Search</h1>
      <input
        type="search"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a movie..."
        className="w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {loading ? (
        <p className="text-gray-500 mt-4">Loading...</p>
      ) : error ? (
        <p className="text-red-500 mt-4">{error}</p>
      ) : movies.length === 0 ? (
        <p className="text-gray-500 mt-4">No movies found.</p>
      ) : (
        <ul className="mt-4">
          {movies.map((movie) => (
            <li key={movie.id} className="mb-4">
              <img
                src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                alt={movie.title}
                className="w-24 h-36 object-cover object-center mr-4"
              />
              <span className="text-lg font-bold">{movie.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieSearch;
