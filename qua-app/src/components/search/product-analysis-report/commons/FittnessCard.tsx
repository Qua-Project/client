import React from 'react';
import styled from '@emotion/native';
import { fittness } from '../utils/constants';

interface FittnessCardProps{
  fittnessKey: string;
}
const FittnessCard: React.FC<FittnessCardProps> = ({fittnessKey}) => {
  const getFitnessImage = (key: string) => {
    const fitnessItem = fittness.find((item) => item.key === key);
    return fitnessItem ? fitnessItem.image : null;
  };

  return (
    <Container>
      <Title>적합도 분석 리포트</Title>
      <FittnessImage source={getFitnessImage(fittnessKey)}/>
    </Container>
  );
};

export default FittnessCard;

const Container = styled.View`
  width: 100%;
  padding-top: 31px;
  padding-bottom: 26px;
  padding-horizontal: 53px;
  align-items: center;
  justify-content: center;
  background-color: #F7F7F7;
  border-radius: 10px;
  margin-top: 28px;
`
const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 32px;
`
const FittnessImage = styled.Image`
  width: 100%;
  resize-mode: contain;
`