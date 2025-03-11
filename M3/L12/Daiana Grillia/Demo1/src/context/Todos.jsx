import { createContext, useState } from "react";

export const TodosContext = createContext({
  todos: [],
  setTodos: () => {},
});

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const value = {
    todos,
    setTodos,
  };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};
