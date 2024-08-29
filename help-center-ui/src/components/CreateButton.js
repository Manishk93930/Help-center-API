// src/components/CreateButton.js
import React from 'react';
import './CreateButton.css';

const CreateButton = ({ onClick }) => {
  return (
    <button className="create-button" onClick={onClick}>
      +
    </button>
  );
};

export default CreateButton;
