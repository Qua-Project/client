import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg';
import styled from '@emotion/native';

interface SkinCircularChartProps {
  percentage: number; // ✅ 0~100 값 입력
}

const SkinCircularChart: React.FC<SkinCircularChartProps> = ({ percentage }) => {
  const radius = 40; // ✅ 원 크기 조정
  const strokeWidth = 25;
  const circumference = 2 * Math.PI * radius; // ✅ 원 둘레 계산
  const strokeDashoffset = circumference * (1 - percentage / 100); // ✅ 퍼센트에 맞게 그라데이션 길이 조정

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
        stroke="transparent" // 연한 배경 원
        strokeWidth={strokeWidth}
        fill="none"
      />

      {/* ✅ 채워진 퍼센트 원 (Gradient) */}
      <Circle
        cx="55"
        cy="55"
        r={radius}
        stroke="url(#circleGradient)" // ✅ 그라데이션 적용
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset} // ✅ 퍼센트에 맞게 채우기
        strokeLinecap="butt"
        fill="none"
        rotation="-90"
        origin="55, 55"
      />

      {/* ✅ 중앙 숫자 */}
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

