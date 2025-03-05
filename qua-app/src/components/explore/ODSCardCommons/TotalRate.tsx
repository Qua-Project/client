import React from "react";
import Svg, { Circle, Text } from "react-native-svg";
import styled from "@emotion/native";

export const TotalRate = ({ percentage = 80, total = 100 }) => {
  const size = 80;
  const strokeWidth = 17.5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius; // 전체 원 둘레
  const progress = (percentage / total) * circumference;
  const strokeDashoffset = circumference - progress; // 12시 방향 시작

  return (
    <RateWrapper>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* 배경 원 */}
        <StyledCircle cx={size / 2} cy={size / 2} r={radius} />

        <ProgressCircle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset} // 12시 방향
          origin={`${size / 2}, ${size / 2}`}
        />

        <CenterCircle cx={size / 2} cy={size / 2} r={size / 2 - strokeWidth} />
        <StyledText x={size / 2} y={size / 2 - 8}>
          total
        </StyledText>
        <StyledPercentage x={size / 2} y={size / 2 + 12}>
          {percentage}
        </StyledPercentage>
      </Svg>
    </RateWrapper>
  );
};

const RateWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const StyledCircle = styled(Circle)`
  stroke-width: 17.5;
  fill: none;
`;

const ProgressCircle = styled(Circle)`
  stroke: #79a3ff;
  stroke-width: 17.5;
  fill: none;
  stroke-linecap: butt; /* 끝부분 둥글지 않게 */
  transform: rotate(-90deg);
  transform-origin: center;
`;

const CenterCircle = styled(Circle)`
  fill: ${({ theme }) => theme.colors.white};
`;

const StyledText = styled(Text)`
  font-size: 10px;
  fill: ${({ theme }) => theme.colors.grey};
  font-family: ${({ theme }) => theme.fonts.family.light};
  text-anchor: middle;
`;

const StyledPercentage = styled(Text)`
  font-size: 18px;
  fill: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.family.bold};
  text-anchor: middle;
`;
