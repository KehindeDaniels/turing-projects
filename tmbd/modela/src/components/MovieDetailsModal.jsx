// src/components/MovieDetailsModal.js
import React from "react";

const MovieDetailsModal = ({ movie, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-4">
        <h2 className="text-lg font-bold">{movie.title}</h2>
        <p className="text-sm">{movie.overview}</p>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MovieDetailsModal;
