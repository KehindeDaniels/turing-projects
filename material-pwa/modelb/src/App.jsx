import React from "react";
import Sidebar from "./Sidebar";
import Card from "./Card";

function App() {
  return (
    <div>
      <Sidebar />
      <div className="container" style={{ padding: "80px" }}>
        <Card />
      </div>
    </div>
  );
}

export default App;
