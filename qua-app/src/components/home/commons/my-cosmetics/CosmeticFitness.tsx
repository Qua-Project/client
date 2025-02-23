import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styled from '@emotion/native';
import { MOCK_DATA } from '../../util/constants';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';

interface CosmeticFitnessProps {
  matchLevel: string; 
  matchData: { label: string; value: number }[];
}

const GradientBar: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <Svg width="100%" height="8">
      <Defs>
        <LinearGradient id="progressGradient" x1="0" y1="0" x2="1" y2="0">
          <Stop offset="0%" stopColor="#9EBBFF" />
          <Stop offset="100%" stopColor="#3A54AA" />
        </LinearGradient>
      </Defs>
      <Rect x="0" y="0" width="100%" height="8" rx="4" fill="#FFFFFF" stroke="#DBDBDB" strokeWidth="1"/>
      <Rect x="0" y="0" width={`${progress * 100}%`} height="8" rx="4" fill="url(#progressGradient)" />
    </Svg>
  );
};


// :React.FC<MyCosmeticListProps> = ({ selectedType })
const CosmeticFitness:React.FC<CosmeticFitnessProps> = ({ matchLevel, matchData }) => {  
  return (
    <Container>
      <ContentText>내 스킨/토너 적합도</ContentText>
      <MatchContent>
        <ProductContainer>
          <SkinScoreDescription source={require('@assets/home/skin_score_discription.png')}/>
          <Background>          
            <ProductImage source={require('@assets/home/fitness/ample_very_good.png')} />
          </Background>
          <MatchBadge match={matchLevel}>{matchLevel}</MatchBadge>
        </ProductContainer>
        {/* 🔹 제품 이미지 */}
        

        {/* 🔹 적합도 바 */}
        <MatchBars>
          {matchData.map((item, index) => (
            <MatchCol key={index}>
              <MatchLabel>{item.label}</MatchLabel>
              <GradientBar progress={item.value} />
            </MatchCol>
          ))}
        </MatchBars>
      </MatchContent>
    </Container>
  );
};

export default CosmeticFitness;

const Container = styled.View`
  align-items: flex-start;
  padding-vertical: 20px;
  gap: 16px;
`;

const ContentText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #0C0D0E;
`
const MatchContent = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;
const ProductContainer = styled.View`
  position: relative;
  flex-direction: col;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding-right: 20px;
  margin-right: 10px;
`
const SkinScoreDescription = styled.Image`
  resize-mode: contain;
  position: absolute;
  top:0;
  right: 0;
  align-self: center;
`;

const Background = styled.View`
  background-color: #E5EDFF;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 83px;
  height: 83px;
  border-radius: 41.5px;
`
const ProductImage = styled.Image`
  position: absolute;
  width: 60px;
  resize-mode: contain;
  z-index: 10;
`;

const MatchBars = styled.View`
  flex: 1;
  gap: 2px;
`;

const MatchCol = styled.View`
  flex-direction: col;
  align-items: flex-start;
  margin-bottom: 6px;
  gap: 2px;
`;

const MatchLabel = styled.Text`
  font-size: 12px;
  width: 60px;
  color: #818182;
`;

/* 🔹 적합도 배지 */
const MatchBadge = styled.Text<{ match: string }>`
  font-size: 20px;
  font-weight: bold;
  color: ${({ match }) =>
    match === '매우 적합' ? '#3A54AA' :
    match === '적합' ? '#84C686' :
    match === '보통' ? '#F2C94C' :
    match === '부적합' ? '#F2994A' :
    '#EB5757'};
  text-align: center;
  margin-top: 25px;
`;