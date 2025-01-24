// src/reducers/userReducer.js
const initialState = {
  users: [],
  user: {},
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return { ...state, loading: true };
    case "FETCH_USERS_SUCCESS":
      return { ...state, users: action.payload, loading: false };
    case "FETCH_USERS_FAILURE":
      return { ...state, error: action.payload, loading: false };
    case "FETCH_USER_REQUEST":
      return { ...state, loading: true };
    case "FETCH_USER_SUCCESS":
      return { ...state, user: action.payload, loading: false };
    case "FETCH_USER_FAILURE":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default userReducer;
