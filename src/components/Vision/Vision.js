
import React from 'react';
import './Vision.css'; 

const VisionCard = ({ title, description, imageUrl }) => {
    return (
        <div className="vision-card">
            <img src={imageUrl} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
};

export default VisionCard;
