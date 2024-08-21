import React from 'react';
import './Tag.css';
import PropTypes from 'prop-types';

const Tag = ({ tag }) => {
  return <div className="tag">{tag}</div>;
};

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default Tag;
