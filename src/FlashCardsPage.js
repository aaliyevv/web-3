import React, { useState, useEffect } from 'react';
import FlashCard from './FlashCard';

function FlashCardsPage() {
  const [cards, setCards] = useState([
    {
      id: 1,
      question: "What is React?",
      answer: "A JavaScript library for building user interfaces",
      lastModified: new Date().toISOString(),
      status: "Want to Learn"
    },
    {
      id: 1,
      question: "What is JavaSvript?",
      answer: "A JavaScript library for building user interfaces",
      lastModified: new Date().toISOString(),
      status: "Want to Learn"
    },
    {
      id: 1,
      question: "What is React?",
      answer: "A JavaScript library for building user interfaces",
      lastModified: new Date().toISOString(),
      status: "Want to Learn"
    },
    ]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleStatusChange = (cardId, newStatus) => {
    setCards(cards.map(card =>
      card.id === cardId ? { ...card, status: newStatus, lastModified: new Date().toISOString() } : card
    ));
  };

  // Filter the cards based on the search term
  const filteredCards = cards.filter(card =>
    card.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Flash Cards Page</h1>
      <p>Here you can practice with flash cards.</p>

      <input
        type="text"
        placeholder="Search Flashcards"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div>
        {filteredCards.map(card => (
          <FlashCard
            key={card.id}
            card={card}
            onStatusChange={handleStatusChange}
          />
        ))}
      </div>
    </div>
  );
}

export default FlashCardsPage;