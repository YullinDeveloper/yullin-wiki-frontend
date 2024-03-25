import React from 'react';
import {
  CardStyle,
  BoxStyle,
  TitleBoxStyle,
  Heading1Style,
  Heading2Style,
  ParagraphStyle,
  WrapperStyle,
  TagStyle,
} from './style';
import Tag from '../Tag/Tag.js';
import Category from '../Category/Category.js';
import CommentCount from '../CommentCount/CommentCount.js';
import PropTypes from 'prop-types';

const LargeCard = props => {
  return (
    <CardStyle>
      <BoxStyle>
        <TitleBoxStyle>
          <Heading1Style>{props.title}</Heading1Style>
          <Heading2Style>
            {props.date} {props.adminName}
          </Heading2Style>
        </TitleBoxStyle>
        <WrapperStyle className="categoryWrapper" id="right">
          <Category category={props.category}></Category>
        </WrapperStyle>
      </BoxStyle>
      <BoxStyle>
        <WrapperStyle className="tagWrapper">
          <TagStyle>
            <Tag tag={props.tag}></Tag>
          </TagStyle>
          <TagStyle>
            <Tag tag={props.tag}></Tag>
          </TagStyle>
          <TagStyle>
            <Tag tag={props.tag}></Tag>
          </TagStyle>
          <TagStyle>
            <Tag tag={props.tag}></Tag>
          </TagStyle>
          <TagStyle>
            <Tag tag={props.tag}></Tag>
          </TagStyle>
        </WrapperStyle>
        <WrapperStyle className="commentCountWrapper">
          <CommentCount commentCount={props.commentCount}></CommentCount>
        </WrapperStyle>
      </BoxStyle>
      <BoxStyle className="boxThree">
        <ParagraphStyle>{props.desc}</ParagraphStyle>
      </BoxStyle>
    </CardStyle>
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
