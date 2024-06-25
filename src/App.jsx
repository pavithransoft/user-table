import { UserProvider } from "./context/UserContext";
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <h1>User Table</h1>
        <AddUserForm />
        <UserTable />
      </div>
    </UserProvider>
  );
}

export default App;
