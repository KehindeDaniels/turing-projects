// src/components/ProfilePage.js
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUserData } from "../actions/userActions";

const ProfilePage = ({ match, userData, fetchUserData, loading, error }) => {
  useEffect(() => {
    fetchUserData(match.params.id);
  }, [match.params.id, fetchUserData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <p>
        Name: {userData.name.first} {userData.name.last}
      </p>
      <p>Email: {userData.email}</p>
      <p>Phone: {userData.phone}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user.userData,
    loading: state.user.loading,
    error: state.user.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserData: (id) => dispatch(fetchUserData(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
