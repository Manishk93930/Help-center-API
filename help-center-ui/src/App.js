import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import HelpSection from './components/HelpSection';
import Footer from './components/Footer';
import CreateButton from './components/CreateButton';
import HelpForm from './components/HelpForm';
import axios from 'axios';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    try {
      const response = await axios.get('http://localhost:3001/cards');
      setCards(response.data);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  const handleCreateButtonClick = () => {
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    fetchCards();
  };

  const handleSearch = (searchResults) => {
    setCards(searchResults);
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className={`app-container ${isFormOpen ? 'blurred' : ''}`}>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <HelpSection cards={cards} />
      <Footer />
      <CreateButton onClick={handleCreateButtonClick} />
      {isFormOpen && <HelpForm onClose={handleFormClose} />}
    </div>
  );
}

export default App;
