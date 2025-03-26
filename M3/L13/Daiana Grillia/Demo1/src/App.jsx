import { useFetch } from "./hooks/useFetch";
import Navbar from "./components/navBar/Navbar";

import "./App.css";

// Codeium: Refactor | Explain | Generate JSDoc | X
function App() {
  const { data, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div className="app-container">
      <Navbar />
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {data?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

