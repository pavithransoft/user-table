import { useContext } from "react";
import { UserContext } from "./../context/UserContext";

const UserTable = () => {
  const { users, loading } = useContext(UserContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.id}>
            <td>{user.id || index + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.username}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
