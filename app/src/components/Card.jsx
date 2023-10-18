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
      <button onClick={addCard} className="add">+</button>
      <div >
        {tasks.map((todo, id) => (
          <div key={todo.id} draggable className="total-card">
            <div className="button-div">
            <button onClick={() => deleteCard(todo.id)} className="button" >X</button>
            </div>
            <textarea
            className="textarea"
              value={text.id}
              onChange={(e) => handleBlockquoteChange(e.target.value)}
              onBlur={(e) => edited(e.target.value, todo.id)}
              placeholder="enter"
            />
            <div className="time">{formatDate(todo.dateTime)}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
