import React from 'react';
import './LargeCard.css';
import Tag from '../Tag/Tag.js';
import Category from '../Category/Category.js';
import CommentCount from '../CommentCount/CommentCount.js';
import PropTypes from 'prop-types';

const LargeCard = props => {
  return (
    <div className="card">
      <div className="boxOne">
        <div className="titleBox">
          <h1>{props.title}</h1>
          <h2>
            {props.date} {props.adminName}
          </h2>
        </div>
        <div className="categoryWrapper" id="right">
          <Category category={props.category}></Category>
        </div>
      </div>
      <div className="boxTwo">
        <div className="tagWrapper">
          <Tag tag={props.tag}></Tag>
          <Tag tag={props.tag}></Tag>
          <Tag tag={props.tag}></Tag>
          <Tag tag={props.tag}></Tag>
          <Tag tag={props.tag}></Tag>
        </div>
        <div className="commentCountWrapper">
          <CommentCount commentCount={props.commentCount}></CommentCount>
        </div>
      </div>
      <div className="boxThree">
        <p>{props.desc}</p>
      </div>
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
