// src/actions/userActions.js
import axios from "axios";

export const fetchUserData = (id) => {
  return (dispatch) => {
    dispatch({ type: "FETCH_USER_DATA_REQUEST" });
    axios
      .get(`https://randomuser.me/api/?id=${id}`)
      .then((response) => {
        dispatch({
          type: "FETCH_USER_DATA_SUCCESS",
          payload: response.data.results[0],
        });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_USER_DATA_FAILURE", payload: error.message });
      });
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_USERS_REQUEST" });
    axios
      .get("https://randomuser.me/api/?results=10")
      .then((response) => {
        dispatch({
          type: "FETCH_USERS_SUCCESS",
          payload: response.data.results,
        });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_USERS_FAILURE", payload: error.message });
      });
  };
};
