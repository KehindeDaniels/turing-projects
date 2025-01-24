import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import UserList from "./components/UserList.jsx";
import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <UserList />
      </div>
    </Provider>
  );
}

export default App;
