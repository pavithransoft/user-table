import { UserProvider } from "./context/UserContext";
import UserTable from "./components/UserTable";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <h1>User Table</h1>
        <UserTable />
      </div>
    </UserProvider>
  );
}

export default App;
