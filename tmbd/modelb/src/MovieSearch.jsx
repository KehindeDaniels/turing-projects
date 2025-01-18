// src/MovieSearch.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function MovieSearch() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const API_KEY = "5dddfd597d087157b4d116f96d618309"; // Replace with your TMDB API key
  const debounceTimeout = 500; // 500ms debounce timeout

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );
        setMovies(response.data.results);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchPopularMovies();
  }, [API_KEY]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (query.trim() === "") return;
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
        );
        setMovies(response.data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    const timeoutId = setTimeout(fetchMovies, debounceTimeout);
    return () => clearTimeout(timeoutId);
  }, [query, API_KEY, debounceTimeout]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Movie Search</h1>
      <input
        type="search"
        value={query}
        onChange={handleSearch}
        placeholder="Search for movies..."
        className="w-full p-2 pl-10 text-lg border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {movies.map((movie) => (
            <li key={movie.id}>
              <div className="flex flex-col">
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <h2 className="text-lg font-bold mt-2">{movie.title}</h2>
                <button
                  onClick={() => handleMovieClick(movie)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-2"
                >
                  View Details
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {selectedMovie && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg p-4 max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold">{selectedMovie.title}</h2>
            <p className="text-lg">{selectedMovie.overview}</p>
            <img
              src={`https://image.tmdb.org/t/p/w200${selectedMovie.poster_path}`}
              alt={selectedMovie.title}
              className="w-full h-64 object-cover rounded-lg mt-4"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieSearch;
