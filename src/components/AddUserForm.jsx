import { useContext, useState } from "react";
import { UserContext } from "./../context/UserContext";
import axios from "axios";

const AddUserForm = () => {
  const { users, setUsers } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { name, email, username };

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        newUser
      );
      setUsers([...users, response.data]);
      setName("");
      setEmail("");
      setUsername("");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;
