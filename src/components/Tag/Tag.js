import React from 'react';
import { TagStyle } from './style';

// eslint-disable-next-line react/prop-types
const Tag = ({ tag }) => {
  return <TagStyle>{tag}</TagStyle>;
};

export default Tag;
