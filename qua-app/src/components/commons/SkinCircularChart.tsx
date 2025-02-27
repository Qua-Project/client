import React from 'react';
import { Text } from 'react-native';
import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg';
import styled from '@emotion/native';

interface SkinCircularChartProps {
  percentage: number; 
}

const SkinCircularChart: React.FC<SkinCircularChartProps> = ({ percentage }) => {
  const radius = 40;
  const strokeWidth = 25;
  const circumference = 2 * Math.PI * radius; 
  const strokeDashoffset = circumference * (1 - percentage / 100); 

  return (
    <Svg width={110} height={110} viewBox="0 0 110 110">
      <Defs>
        <LinearGradient id="circleGradient" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0%" stopColor="#CBDBFF" />
          <Stop offset="100%" stopColor="#E9F0FF" />
        </LinearGradient>
      </Defs>

      <Circle
        cx="55"
        cy="55"
        r={radius}
        stroke="transparent" 
        strokeWidth={strokeWidth}
        fill="none"
      />

      <Circle
        cx="55"
        cy="55"
        r={radius}
        stroke="url(#circleGradient)" 
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="butt"
        fill="none"
        rotation="-90"
        origin="55, 55"
      />

      <TextComponent >
        <Text style={{ fontSize: 12, fontWeight: 400, color: '#818182' }}>
          total
        </Text>
        <Text style={{ fontSize: 20, fontWeight: 600, color: '#081533' }}>
          {percentage}
        </Text>
      </TextComponent>
    </Svg>
  );
};

export default SkinCircularChart;

const TextComponent = styled.View`
  width: 60px;
  height: 60px;
  position: absolute;
  flex-direction: col;
  gap: 3px;
  align-items: center;
  justify-content: center;
  top: 25px;
  left: 25px;
`;

