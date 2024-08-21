import React from 'react';
import { CommentCountStyle } from './style';
import PropTypes from 'prop-types';

const CommentCount = ({ commentCount }) => {
  return <CommentCountStyle>{commentCount}</CommentCountStyle>;
};

CommentCount.propTypes = {
  commentCount: PropTypes.number.isRequired,
};

export default CommentCount;
