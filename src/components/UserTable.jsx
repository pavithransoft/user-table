import { useContext, useState } from "react";
import { UserContext } from "./../context/UserContext";
import EditUserForm from "./EditUserForm";

const UserTable = () => {
  const { users, loading, deleteUser } = useContext(UserContext);
  const [editingUser, setEditingUser] = useState(null);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {editingUser && (
        <EditUserForm user={editingUser} onClose={() => setEditingUser(null)} />
      )}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{user.id || index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>
                <button onClick={() => setEditingUser(user)}>Edit</button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
