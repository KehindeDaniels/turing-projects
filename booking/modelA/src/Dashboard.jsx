// Dashboard.js
import React from "react";

function Dashboard() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline">Your Dashboard</h1>
      <p className="mt-4 text-lg">
        Here's an overview of your saved listings and recent activity.
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Saved Listings</h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="p-4 border rounded">
            <h3 className="font-bold">Urban Studio</h3>
            <p>Location: Downtown LA</p>
            <p>Price: $650,000</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="font-bold">Suburban Home</h3>
            <p>Location: San Diego</p>
            <p>Price: $950,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
