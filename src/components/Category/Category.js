import React from 'react';
import { CategoryStyle } from './style';
import PropTypes from 'prop-types';

const Category = ({ category }) => {
  return <CategoryStyle>{category}</CategoryStyle>;
};

Category.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Category;
