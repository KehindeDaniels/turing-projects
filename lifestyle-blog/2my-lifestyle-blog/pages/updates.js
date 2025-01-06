import { useState, useEffect } from "react";
import axios from "axios";

const UpdatesPage = () => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    axios
      .get("/api/updates")
      .then((response) => {
        setUpdates(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Updates</h1>
      <ul>
        {updates.map((update) => (
          <li key={update.id}>
            <h2>{update.title}</h2>
            <p>{update.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpdatesPage;
