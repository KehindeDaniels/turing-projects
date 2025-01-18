// src/components/MovieList.js
import React from "react";

const MovieList = ({ movies, onClick }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <li key={movie.id}>
          <div className="flex flex-col items-center">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-full object-cover rounded-lg"
            />
            <h2 className="text-lg font-bold mt-2">{movie.title}</h2>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg"
              onClick={() => onClick(movie)}
            >
              View Details
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
