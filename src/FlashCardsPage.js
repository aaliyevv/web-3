import React, { useState } from 'react';
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
      id: 2,
      question: "What is JavaScript?",
      answer: "A programming language used for web development",
      lastModified: new Date().toISOString(),
      status: "Learned"
    },
    {
      id: 1,
      question: "What is React?",
      answer: "A JavaScript library for building user interfaces",
      lastModified: new Date().toISOString(),
      status: "Want to Learn"
    },{
      id: 1,
      question: "What is React?",
      answer: "A JavaScript library for building user interfaces",
      lastModified: new Date().toISOString(),
      status: "Want to Learn"
    },{
      id: 1,
      question: "What is React?",
      answer: "A JavaScript library for building user interfaces",
      lastModified: new Date().toISOString(),
      status: "Want to Learn"
    },{
      id: 1,
      question: "What is React?",
      answer: "A JavaScript library for building user interfaces",
      lastModified: new Date().toISOString(),
      status: "Want to Learn"
    },{
      id: 1,
      question: "What is React?",
      answer: "A JavaScript library for building user interfaces",
      lastModified: new Date().toISOString(),
      status: "Want to Learn"
    },{
      id: 1,
      question: "What is React?",
      answer: "A JavaScript library for building user interfaces",
      lastModified: new Date().toISOString(),
      status: "Want to Learn"
    },
    // Add more cards with unique IDs
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [sortAttribute, setSortAttribute] = useState("id");
  const [newCard, setNewCard] = useState({ question: "", answer: "" });

  const handleStatusChange = (cardId, newStatus) => {
    setCards(cards.map(card =>
      card.id === cardId ? { ...card, status: newStatus, lastModified: new Date().toISOString() } : card
    ));
  };

  const handleNewCardChange = (e) => {
    setNewCard({ ...newCard, [e.target.name]: e.target.value });
  };

  const addNewCard = () => {
    if (newCard.question && newCard.answer) {
      setCards([
        ...cards,
        {
          id: Math.max(...cards.map(card => card.id), 0) + 1,
          question: newCard.question,
          answer: newCard.answer,
          lastModified: new Date().toISOString(),
          status: "Want to Learn"
        }
      ]);
      setNewCard({ question: "", answer: "" });
    }
  };

  const deleteCard = (cardId) => {
    setCards(cards.filter(card => card.id !== cardId));
  };

  const filteredAndSearchedCards = cards
    .filter(card =>
      filterStatus === "All" || card.status === filterStatus
    )
    .filter(card =>
      card.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const sortedCards = [...filteredAndSearchedCards].sort((a, b) => {
    switch (sortAttribute) {
      case "lastModified":
        return new Date(b.lastModified) - new Date(a.lastModified);
      case "status":
        return a.status.localeCompare(b.status);
      default:
        return a.id - b.id;
    }
  });

  return (
    <div>
      <h1>Flash Cards Page</h1>
      
      <input
        type="text"
        placeholder="Search Flashcards"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <select onChange={(e) => setFilterStatus(e.target.value)}>
        <option value="All">All</option>
        <option value="Learned">Learned</option>
        <option value="Want to Learn">Want to Learn</option>
        <option value="Noted">Noted</option>
      </select>

      <select onChange={(e) => setSortAttribute(e.target.value)}>
        <option value="id">ID</option>
        <option value="lastModified">Last Modified</option>
        <option value="status">Status</option>
      </select>

      <div>
        {sortedCards.map(card => (
          <FlashCard
            key={card.id}
            card={card}
            onStatusChange={handleStatusChange}
            onDelete={deleteCard}
          />
        ))}
      </div>

      <h2>Add a New Flash Card</h2>
      <input
        type="text"
        name="question"
        placeholder="Enter question"
        value={newCard.question}
        onChange={handleNewCardChange}
      />
      <input
        type="text"
        name="answer"
        placeholder="Enter answer"
        value={newCard.answer}
        onChange={handleNewCardChange}
      />
      <button onClick={addNewCard}>Add Card</button>
    </div>
  );
}

export default FlashCardsPage;