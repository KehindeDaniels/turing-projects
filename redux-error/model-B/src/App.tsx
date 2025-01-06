// App.tsx
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { fetchPostById, clearError, clearData } from "./store/apiSlice";

const App: React.FC = () => {
  const [postId, setPostId] = useState("");
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.api);

  const handleFetchData = () => {
    if (!postId || isNaN(parseInt(postId))) {
      dispatch(clearData());
      return;
    }
    dispatch(fetchPostById(postId));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostId(e.target.value);
    dispatch(clearError());
    dispatch(clearData());
  };

  return (
    <div>
      <h1>Fetch Post by ID</h1>
      <input
        type="text"
        placeholder="Enter post ID"
        value={postId}
        onChange={handleInputChange}
      />
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <button onClick={handleFetchData}>Fetch Post</button>
      )}

      {loading ? (
        <p>Loading...</p>
      ) : data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default App;
