import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Defs, LinearGradient  as SvgGradient, Stop, Rect } from 'react-native-svg';
import styled from '@emotion/native';
import { LinearGradient } from 'expo-linear-gradient';

interface DresserPostionProgressBarProps {
  score: number; 
}

const DresserPostionProgressBar: React.FC<DresserPostionProgressBarProps> = ({ score }) => {
  return (
    <Container>
      <ProgressBarContainer>
        <Svg width="100%" height="12">
          <Defs>
            <SvgGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <Stop offset="0%" stopColor="#5D85EE" />
              <Stop offset="100%" stopColor="#3A54AA" />
            </SvgGradient>
          </Defs>
          
          <Rect x="0" y="0" width="100%" height="12" rx="6" fill="url(#progressGradient)" />
        </Svg>
        
        <ScoreBubble 
          style={{ left: (324 * (100-score)/100 - 15) }}
          colors= {['#F2F6FF', '#CBDBFF']}
          start= {{ x: 0.5, y: 0 }}
          end= {{ x: 0.5, y: 1 }}
        >
          <ScoreText>{score}</ScoreText>
        </ScoreBubble>
      </ProgressBarContainer>
    </Container>
  );
};

export default DresserPostionProgressBar;

const Container = styled.View`
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  margin-top: 3px;
`;

const ProgressBarContainer = styled.View`
  position: relative;
  width: 324px;
`;

const ScoreBubble = styled(LinearGradient)`
  position: absolute;
  top: -6px;
  width: 30px;
  height: 30px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

const ScoreText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #081533;
`;
