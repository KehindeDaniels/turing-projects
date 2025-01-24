import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../actions/userActions";
import Modal from "./Modal.jsx";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const [showModal, setShowModal] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState({});

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleViewDetails = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  return (
    <div>
      <h1>User List</h1>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.login.uuid}>
            <span>
              {user.name.first} {user.name.last}
            </span>
            <button onClick={() => handleViewDetails(user)}>
              View Details
            </button>
          </li>
        ))}
      </ul>
      {showModal && (
        <Modal user={selectedUser} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default UserList;
