// src/reducers/userReducer.js
const initialState = {
  userData: {},
  loading: false,
  error: null,
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_DATA_REQUEST":
      return { ...state, loading: true };
    case "FETCH_USER_DATA_SUCCESS":
      return { ...state, userData: action.payload, loading: false };
    case "FETCH_USER_DATA_FAILURE":
      return { ...state, error: action.payload, loading: false };
    case "FETCH_USERS_REQUEST":
      return { ...state, loading: true };
    case "FETCH_USERS_SUCCESS":
      return { ...state, users: action.payload, loading: false };
    case "FETCH_USERS_FAILURE":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default userReducer;
