import styled from 'styled-components';

export const CommentCountStyle = styled.div`
  position: relative;
  width: 30px;
  background: rgba(217, 177, 177, 1);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  border-radius: 10px 10px 0 10px;
  margin-bottom: 5px;
  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 100%;
    border-left: 4px solid transparent;
    border-right: 4px solid rgba(217, 177, 177, 1);
    border-top: 4px solid rgba(217, 177, 177, 1);
    border-bottom: 4px solid transparent;
  }
`;
