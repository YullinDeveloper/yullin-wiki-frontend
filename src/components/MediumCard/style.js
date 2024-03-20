import styled from 'styled-components';

export const TagWrapper = styled.div`
  margin: 10px 0px 20px 0;
`;

export const MCardHeader = styled.h1`
  font-family: 'Pretendard';
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: left;
`;

export const MCardCont = styled.p`
  font-family: 'Pretendard';
  font-size: 15px;
  font-weight: 300;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: left;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  max-height: 63px; /* 3줄 * 21px (line-height) */
  overflow: hidden;
  white-space: normal; /* nowrap 대신 normal 사용 */
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
`;

export const MediumCardStyle = styled.div`
  display: inline-block;
  background-color: rgba(246, 245, 244, 1);
  padding: 20px;
  border-radius: 20px;
  justify-content: space-between;
  width: 190px;
  height: 190px;
`;
