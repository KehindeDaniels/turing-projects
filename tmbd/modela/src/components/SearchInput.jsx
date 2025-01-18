// src/components/SearchInput.js
import React, { useState, useEffect } from "react";

const SearchInput = ({ onSearch, placeholder }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(query);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query, onSearch]);

  return (
    <input
      type="search"
      value={query}
      onChange={handleInputChange}
      placeholder={placeholder}
      className="w-full p-2 pl-10 text-sm text-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500"
    />
  );
};

export default SearchInput;
