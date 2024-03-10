import React from 'react';
import './LargeCard.css';
import Tag from '../Tag/Tag.js';
import Category from '../Category/Category.js';
import CommentCount from '../CommentCount/CommentCount.js';
import PropTypes from 'prop-types';

const LargeCard = props => {
  return (
    <div className="largeCard">
      <header>
        <h1>
          {props.title}
          <div className="categoryWrapper" id="right">
            <Category category={props.category}></Category>
          </div>
        </h1>
      </header>
      <h2>
        {props.date} {props.adminName}
      </h2>
      <div className="tagWrapper">
        <Tag tag={props.tag}></Tag>
      </div>
      <div className="commentCountWrapper">
        <CommentCount commentCount={props.commentCount}></CommentCount>
      </div>
      <section>
        <p>{props.desc}</p>
      </section>
    </div>
  );
};

LargeCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  adminName: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
};

export default LargeCard;
