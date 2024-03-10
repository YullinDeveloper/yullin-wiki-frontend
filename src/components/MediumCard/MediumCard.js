import React from 'react';
import './MediumCard.css';
import Tag from '../Tag/Tag';
import './MediumCard.css';

// eslint-disable-next-line react/prop-types
const MediumCard = ({ header, desc }) => {
  return (
    <div className="mediumCard">
      <h1>{header}</h1>
      <div className="tagWrapper">
        <Tag tag={'태그1'} />
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default MediumCard;
