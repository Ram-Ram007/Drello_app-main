import {  useReducer } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  function todoReducer(todos, action) {
    switch (action.type) {
      case "TODO_ADD": {
        return [
          ...todos,
          {
            id: new Date().getTime(),
            text: action.value,
          },
        ];
      }
      case "TODO_DELETE": {
        const filtered = todos.filter((t) => t.id != action.value);
        return [...filtered];
      }
      default: {
        throw Error("Unknown action: " + action.type);
      }
    }
  }

  function handleAdd(value) {
    dispatch({
      type: "TODO_ADD",
      value: value,
    });
  }
  function handleDelete(id) {
    dispatch({
      type: "TODO_DELETE",
      value: id,
    });
  }

  return (
    <>
      <div className="container">
        <h1>My todo</h1>
        <Card addTodo={(blockquotes) => handleAdd(blockquotes)} todos={todos} />
      </div>
    </>
  );
}

export default App;