// src/App.js
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
    try {
      const response = await fetch(
        `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchPopularMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_URL}/movie/popular?api_key=${API_KEY}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      setError(error.message);
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
        <p>Error: {error}</p>
      ) : movies.length === 0 ? (
        <p>No movies found</p>
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
