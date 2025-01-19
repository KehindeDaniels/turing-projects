import React from "react";

const MovieDetailsModal = ({ movie, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-4 md:p-6 lg:p-8 overflow-y-auto max-h-screen-90">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">{movie.title}</h2>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <div className="flex flex-col md:flex-row">
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
            className="w-full md:w-1/2 object-cover rounded-lg md:mr-4"
          />
          <div className="mt-4 md:mt-0">
            <p className="text-sm">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsModal;
