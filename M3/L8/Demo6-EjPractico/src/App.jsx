import "./App.css";
import AddToDo from "./components/AddToDo";
import ToDoCounter from "./components/ToDoCounter";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <>
      <h2>ToDo List</h2>
      <AddToDo />
      <ToDoCounter />
      <ToDoList />
    </>
  );
}

export default App;

