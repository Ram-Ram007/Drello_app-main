import React, { useState } from "react";
import { formatDate } from "../utils";
function Card({ addTodo, edited, tasks, deleteCard }) {
  const [text, setText] = useState("");

  const addCard = () => {
    addTodo(text);
  };
  function handleBlockquoteChange(newValue) {
    setText(newValue);
  }

  return (
    <>
      <button onClick={addCard}>+</button>
      <div className="">
        {tasks.map((todo, id) => (
          <div key={todo.id} draggable>
            <textarea
              value={text.id}
              onChange={(e) => handleBlockquoteChange(e.target.value)}
              onBlur={(e) => edited(e.target.value, todo.id)}
              placeholder="enter"
            />
            <div>{formatDate(todo.dateTime)}</div>
            <button onClick={() => deleteCard(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
