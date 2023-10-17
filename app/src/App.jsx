import React, { useReducer, useState } from "react";
import Card from "./components/Card"; // Import the Card component
import "./App.css";

function App() {
  const [cards, dispatch] = useReducer(cardReducer, []);
  const [newCardTitle, setNewCardTitle] = useState("");
  

  function cardReducer(state, action) {
    switch (action.type) {
      case "ADD_CARD":
        return [
          ...state,
          {
            id: Date.now(),
            title: action.value.title,
            
          },
        ];
      default:
        return state;
    }
  }

  const addCard = () => {
    if (newCardTitle) {
      dispatch({
        type: "ADD_CARD",
        value: { title: newCardTitle},
      });
      setNewCardTitle("");
      
    }
  };

  return (
    <div className="App">
      <h1>Card Creator App</h1>
      <div className="add-card">
        <textarea
          type="text"
          placeholder="Enter card title"
          value={newCardTitle}
          onChange={(e) => setNewCardTitle(e.target.value)}
        />
        
        <button onClick={addCard}>+</button>
      </div>
      <div className="cards">
        {cards.map((card) => (
          <Card key={card.id} title={card.title} />
        ))}
      </div>
    </div>
  );
}

export default App;
