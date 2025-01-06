import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { fetchPostById } from "./store/apiSlice";

const App: React.FC = () => {
  const [postId, setPostId] = useState("");
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((state) => state.api);

  const handleFetchData = () => {
    dispatch(fetchPostById(postId)); // Dispatch API call with user input
  };

  return (
    <div>
      <h1>Fetch Post by ID</h1>
      <input
        type="text"
        placeholder="Enter post ID"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />
      <button onClick={handleFetchData}>Fetch Post</button>

      {loading && <p>Loading...</p>}

      {/* No explicit error handling */}
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default App;
