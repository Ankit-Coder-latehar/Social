
import React from 'react';
import './Whatsapp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsApp = () => {
  const phoneNumber = '+917821996842'; 

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className="whatsapp-container" onClick={handleClick}>
      <FontAwesomeIcon icon={faWhatsapp} size="2x" />
    </div>
  );
};

export default WhatsApp;
