import React from 'react';
import styled from '@emotion/native';

const WaitingCard: React.FC = () => {
  return (
    <Container>
      <IconImage source={require('@/assets/onBoarding/document.png')}/>
      <Title>분석중</Title>
    </Container>
  );
};
const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  font-family: Pretendard;
  text-align: center;
  color: #5D85EE;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const IconImage = styled.Image`
  width: 184px;
  height: 184px;
  justify-content: center;
  align-items: center;
`
const Container = styled.View`
  flex: 1;
  color: transparent;
  justify-content: center;
  align-items: center;
  gap: 4px;
`

export default WaitingCard;
