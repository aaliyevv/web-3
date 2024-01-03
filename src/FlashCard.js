import React, { useState } from 'react';
import './FlashCard.css';

function FlashCard({ card, onStatusChange }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => setIsFlipped(!isFlipped);

  return (
    <div onClick={flipCard}>
      <div>{isFlipped ? card.answer : card.question}</div>
      <div>Last Modified: {card.lastModified}</div>
      <div>Status: {card.status}</div>
      <button onClick={() => onStatusChange(card.id, "Learned")}>Learned</button>
      <button onClick={() => onStatusChange(card.id, "Want to Learn")}>Want to Learn</button>
      <button onClick={() => onStatusChange(card.id, "Noted")}>Noted</button>
    </div>
  );
}

export default FlashCard;