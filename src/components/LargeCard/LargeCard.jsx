import React from 'react';
import styles from './LargeCard.module.css';
import Tag from '../Tag/Tag.jsx';
import Category from '../Category/Category.jsx';
import CommentCount from '../CommentCount/CommentCount.jsx';

const LargeCard = props => {
  console.log(props);
  return (
    <div className={styles['large-card-wrap']}>
      <div className={styles['box-style']}>
        <div className={styles['title-box-style']}>
          <h1 className={styles['heading1']}>{props.title}</h1>
          <h2 className={styles['heading2']}>
            {props.date} {props.adminName}
          </h2>
        </div>
        <div
          className={`${styles['wrapper-style']} ${styles['category-wrapper']}`}
          id="right"
        >
          <Category category={props.category}></Category>
        </div>
      </div>
      <div className={styles['box-style']}>
        <div className={`${styles['wrapper-style']} ${styles['tag-wrapper']}`}>
          <Tag tag={props.tag}></Tag>
          <Tag tag={props.tag}></Tag>
          <Tag tag={props.tag}></Tag>
          <Tag tag={props.tag}></Tag>
          <Tag tag={props.tag}></Tag>
        </div>
        <div
          className={`${styles['wrapper-style']} ${styles['commentcount-wrapper']}`}
        >
          <CommentCount commentCount={props.commentCount}></CommentCount>
        </div>
      </div>
      <div className={styles['box-style']}>
        <p className={styles['paragraph-style']}>{props.desc}</p>
      </div>
    </div>
  );
};

export default LargeCard;
