import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../actions/userActions";

const Modal = ({ user, onClose }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.user);

  React.useEffect(() => {
    dispatch(fetchUser(user.login.uuid));
  }, [dispatch, user]);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>
            {userData.name?.first} {userData.name?.last}
          </h2>
        </div>
        <div className="modal-body">
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
