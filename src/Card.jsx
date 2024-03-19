import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ card, type }) {
  const CardIcon = card.icon;
  return (
    <div className={`card-wrapper ${type}`}>
      <CardIcon card={card} color={card.color} className={'card-icon '} />
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.ReactComponent,
  type: PropTypes.string
};
