import React from 'react';
import './Category.css';
import PropTypes from 'prop-types';

const Category = ({ category }) => {
  return <div className="category">{category}</div>;
};

Category.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Category;
