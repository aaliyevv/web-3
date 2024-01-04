import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import FlashCardsPage from './FlashCardsPage';
import ContactMePage from './ContactMePage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/flash-cards">Flash Cards</Link>
            </li>
            <li>
              <Link to="/contact-me">Contact Me</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/flash-cards" element={<FlashCardsPage />} />
          <Route path="/contact-me" element={<ContactMePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <footer className="App-footer"></footer>
      </div>
    </Router>
  );
}

export default App;