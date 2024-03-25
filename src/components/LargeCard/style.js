import styled from 'styled-components';

export const CardStyle = styled.div`
  display: inline-block;
  background-color: rgba(246, 245, 244, 1);
  padding: 25px 30px;
  border-radius: 20px;
  width: 425px;
  height: 255px;
`;

export const BoxStyle = styled.div`
  display: flex;
`;

export const TitleBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Heading1Style = styled.h1`
  color: rgba(0, 0, 0, 1);
  font-size: 20px;
  font-weight: 700;
  line-height: 27px;
  margin: 0;
`;

export const Heading2Style = styled.h2`
  color: rgba(139, 102, 102, 1);
  font-size: 13px;
  font-weight: 300;
  margin: 0;
`;

export const ParagraphStyle = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  font-size: 15px;
  font-weight: 300;
  line-height: 21px;
  max-height: 84px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 0 5px;
  margin-right: 0 5px;
  box-sizing: border-box;
`;

export const WrapperStyle = styled.div`
  margin: 10px 0px 20px 0;
  display: flex;
  flex-direction: row;

  &.tagWrapper {
    justify-content: flex-start;
  }

  &.commentCountWrapper,
  &.categoryWrapper {
    justify-content: flex-end;
    margin-left: auto;
  }
`;

export const TagStyle = styled.div`
  background-color: rgba(232, 236, 208, 1);
  padding: 3px 4px;
  border-radius: 10px;
  display: flex;

  &:after {
    content: '';
  }
`;
