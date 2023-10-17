import React, { useState } from "react";

function Card({ addTodo, todos }) {
  const [blockquotes, setBlockquotes] = useState("");

  const addCard = () => {
    setBlockquotes("");
    addTodo(blockquotes);
  };

  function handleBlockquoteChange(newValue) {
    setBlockquotes(newValue);
    console.log(newValue);
  }

  return (
    <>
      <button onClick={addCard}>+</button>
      <div className="card">
        {todos.map((todo, index) => (
          <div key={todo.id}>
            <blockquote
              key={todo.id}
              contentEditable={true}
              suppressContentEditableWarning={true}
              onInput={(e) => handleBlockquoteChange(e.target.innerHTML)}
            >
              {todo.text}
            </blockquote>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;