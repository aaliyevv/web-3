import React, { useState } from 'react';
import './FlashCard.css';

function FlashCard({ card, onStatusChange, onDelete }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => setIsFlipped(!isFlipped);

  return (
    <div className="flashcard-container" onClick={flipCard}>
      <div>{isFlipped ? card.answer : card.question}</div>
      <div>Last Modified: {card.lastModified}</div>
      <div>Status: {card.status}</div>
      <button onClick={(e) => { e.stopPropagation(); onStatusChange(card.id, "Learned"); }}>Learned</button>
      <button onClick={(e) => { e.stopPropagation(); onStatusChange(card.id, "Want to Learn"); }}>Want to Learn</button>
      <button onClick={(e) => { e.stopPropagation(); onStatusChange(card.id, "Noted"); }}>Noted</button>
      <button onClick={(e) => { e.stopPropagation(); onDelete(card.id); }}>Delete</button>
    </div>
  );
}

export default FlashCard;