import React, { useState, useEffect } from "react";
import SearchInput from "./components/SearchInput";
import MovieList from "./components/MovieList";
import MovieDetailsModal from "./components/MovieDetailsModal";

const API_KEY = "5dddfd597d087157b4d116f96d618309";
const API_URL = "https://api.themoviedb.org/3";

const App = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (query) => {
    setQuery(query);
  };

  const fetchMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.results.length === 0) {
        setError("No movies found. Please try a different search query.");
      } else {
        setMovies(data.results);
      }
    } catch (error) {
      if (error.message.includes("Failed to fetch")) {
        setError("Network error. Please check your internet connection.");
      } else if (error.message.includes("HTTP error")) {
        setError(`Server error. Status code: ${error.message.split(": ")[1]}`);
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchPopularMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${API_URL}/movie/popular?api_key=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      if (error.message.includes("Failed to fetch")) {
        setError("Network error. Please check your internet connection.");
      } else if (error.message.includes("HTTP error")) {
        setError(`Server error. Status code: ${error.message.split(": ")[1]}`);
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchMovies();
    } else {
      fetchPopularMovies();
    }
  }, [query]);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <SearchInput onSearch={handleSearch} placeholder="Search for movies" />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : movies.length === 0 && !query ? (
        <p>Loading popular movies...</p>
      ) : movies.length === 0 && query ? (
        <p>
          No movies found for "{query}". Please try a different search query.
        </p>
      ) : (
        <MovieList movies={movies} onClick={handleMovieClick} />
      )}
      <MovieDetailsModal
        movie={selectedMovie}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default App;
