// src/components/HelpForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './HelpForm.css';

const HelpForm = ({ onClose, onCardAdded }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/cards', formData);
      console.log('Card submitted:', response.data);
      onCardAdded(response.data); // Update the parent component's state
      alert('Card submitted successfully!');
      onClose(); // Close the form after successful submission
    } catch (error) {
      console.error('Error submitting card:', error);
      alert('Error submitting card');
    }
  };

  return (
    <div className="help-form-overlay">
      <div className="help-form-container">
        <h2>Create Help Center Card</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default HelpForm;
