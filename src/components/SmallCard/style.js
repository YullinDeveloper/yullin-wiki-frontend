import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const SmallCardStyle = styled(Link)`
  display: block;
  width: 85px;
  height: 85px;
  padding: 5px;
  border-radius: 10px;
  gap: 7px;
  background-color: rgba(246, 245, 244, 1);
  justify-content: center;
`;
export const SCardSpan = styled.span`
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0px;
  text-align: center;
  color: rgba(179, 32, 32, 1);
  display: block;
  padding-top: 10px;
  padding-bottom: 5px;
`;

export const SCardSpanHeader = styled.p`
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0px;
  text-align: center;
  color: rgba(179, 32, 32, 1);
  display: block;
`;
