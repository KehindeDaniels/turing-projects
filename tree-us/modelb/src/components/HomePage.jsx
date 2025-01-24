// src/components/HomePage.js
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/userActions";
import Modal from "./Modal";

const HomePage = ({ users, fetchUsers, loading, error }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {users.map((user) => (
          <li key={user.login.uuid}>
            <p>
              Name: {user.name.first} {user.name.last}
            </p>
            <p>Email: {user.email}</p>
            <button
              onClick={() => {
                // Show modal with user details
                const modal = document.getElementById("modal");
                modal.style.display = "block";
                const modalContent = document.getElementById("modal-content");
                modalContent.innerHTML = `
                <h2>User Details</h2>
                <p>Name: ${user.name.first} ${user.name.last}</p>
                <p>Email: ${user.email}</p>
                <p>Phone: ${user.phone}</p>
              `;
              }}
            >
              View Details
            </button>
          </li>
        ))}
      </ul>
      <Modal />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.user.users,
    loading: state.user.loading,
    error: state.user.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
