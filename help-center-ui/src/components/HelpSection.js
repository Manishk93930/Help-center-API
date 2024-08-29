// import React, {useEffect,useState} from 'react';
// import axios from 'axios';
// import './HelpSection.css';

// const HelpSection = () => {
//     const sections = [
//         {
//             title: 'Branches',
//             description: 'Abstract Branches lets you manage,version, and document your designs in one place.'
//         },
//         {
//             title:'Manage your account',
//             description:'Configure your account settings, such as your email,profile details, and password.'
//         },
//         {
//             title:'Manage organizations, teams, and projects', 
//             description:'Use Abstract organizations,teams and projects to organize your people and your work.'
//         },
//         {
//             title:'Manage billing',
//             description:'Change subscriptions and payment details.'
//         },
//         {
//             title:'Authenticate to Abstract',
//             description:'Set up and configure SSO, SCIM, and Just-in-Time provisioning.'
//         },
//         {
//             title:'Abstract Support',
//             description:'Get in touch with a human.'
//         },
//     ];

//     return(
//         <div className='help-section'>
//             {sections.map((section,index)=>(
//                 <div key={index} className="help-item">
//                     <h3>{section.title}</h3>
//                     <p>{section.description}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default HelpSection;


// src/components/HelpSection.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HelpForm from './HelpForm';
import './HelpSection.css';

const HelpSection = () => {
  const [cards, setCards] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('http://localhost:3001/cards');
        setCards(response.data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchCards();
  }, []);

  const addCard = (newCard) => {
    setCards([...cards, newCard]);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsFormOpen(true)}>Add Card</button>
      {isFormOpen && <HelpForm onClose={handleFormClose} onCardAdded={addCard} />}
      <div className='cards-container'>
        {cards.map((card) => (
          <div key={card._id} className='card'>
            <h3>{card.title}</h3>0
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpSection;

