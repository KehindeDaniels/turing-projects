// App.tsx
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { fetchPostById } from "./store/apiSlice";

const App: React.FC = () => {
  const [postId, setPostId] = useState("");
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.api);

  const handleFetchData = () => {
    if (postId.trim() === "") {
      alert("Please enter a post ID");
      return;
    }
    dispatch(fetchPostById(postId));
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

      {error && <p style={{ color: "red" }}>{error}</p>}

      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default App;
