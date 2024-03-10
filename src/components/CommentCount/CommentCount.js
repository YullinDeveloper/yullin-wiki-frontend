import React from 'react';
import './CommentCount.css';
import PropTypes from 'prop-types';

const CommentCount = ({ commentCount }) => {
  return <div className="commentCount">{commentCount}</div>;
};

CommentCount.propTypes = {
  commentCount: PropTypes.number.isRequired,
};

export default CommentCount;
