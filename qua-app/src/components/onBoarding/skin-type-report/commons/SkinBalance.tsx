import React from 'react';
import { View, Text, Image } from 'react-native';
import Svg, { Polygon, Line, Circle, Text as SvgText } from 'react-native-svg';
import styled from '@emotion/native';

// :React.FC<RadarChartProps> = ({ myData, avgData })

interface RadarChartProps {
  myData: { moisture: number; oil: number; sensitivity: number };
  avgData: { moisture: number; oil: number; sensitivity: number };
}

const SkinBalance = () => {
  const data = {
    myData: {moisture: 65, oil: 78, sensitivity: 50},
    avgData: {moisture: 70, oil: 60, sensitivity: 80}
  }

  const maxValue = 100; // 최대값 (정규화 용도)
  const size = 280; // SVG 크기
  const center = size / 2;
  const radius = size / 2.2;

  // 데이터를 정규화하여 좌표로 변환하는 함수
  const getPoint = (value: number, angle: number) => {
    const scaledValue = (value / maxValue) * radius;
    return {
      x: center + scaledValue * Math.cos(angle),
      y: center - scaledValue * Math.sin(angle),
    };
  };

  // 각 데이터의 각도 (120도씩 배치)
  const angles = [
    (Math.PI / 2), // 수분도 (위쪽)
    (-Math.PI / 6), // 민감도 (오른쪽)
    (-5 * Math.PI) / 6, // 유분도 (왼쪽)
  ];

  // "나"와 "평균"의 좌표 계산
  const myPoints = angles.map((angle, i) =>
    getPoint([data.myData.moisture, data.myData.sensitivity, data.myData.oil][i], angle)
  );

  const avgPoints = angles.map((angle, i) =>
    getPoint([data.avgData.moisture, data.avgData.sensitivity, data.avgData.oil][i], angle)
  );

  return (
    <Container>
      <TitleText>내 피부 밸런싱</TitleText>
      <SmallText>피부 상태에 대한 이해는 균형 잡힌 관리로 이어집니다</SmallText>
      <DescriptionBox>
        <Svg x={center} y={center+30} width={size} height={size} >
          {/* 🔹 레이더 차트의 축선 */}
          {angles.map((angle, i) => {
            const { x, y } = getPoint(maxValue, angle);
            return <Line key={i} x1={center} y1={center} x2={x} y2={y} stroke="#081533" strokeWidth={1} />;
          })}

          {/* 🔹 "평균" 데이터 삼각형 (연핑크) */}
          <Polygon
            points={avgPoints.map((p) => `${p.x},${p.y}`).join(' ')}
            fill="rgba(255, 182, 226, 0.5)" // 연한 분홍색
            stroke="transparent"
            strokeWidth={0}
          />

          {/* 🔹 "나" 데이터 삼각형 (연파랑) */}
          <Polygon
            points={myPoints.map((p) => `${p.x},${p.y}`).join(' ')}
            fill="rgba(121, 163, 255, 0.5)" // 연한 파란색
            stroke="transparent"
            strokeWidth={0}
          />

          {/* 🔹 축 레이블 (수분도, 유분도, 민감도) */}
          <SvgText x={center} y={8} fontSize="10" fill="#081533" textAnchor="middle" >
            수분도
          </SvgText>
          <SvgText x={size - 25} y={center + 80} fontSize="10" fill="#081533" textAnchor="middle">
            민감도
          </SvgText>
          <SvgText x={25} y={center + 80} fontSize="10" fill="#081533" textAnchor="middle">
            유분도
          </SvgText>

          {/* 🔹 데이터 값 표시 */}
          <SvgText x={myPoints[0].x+10} y={myPoints[0].y - 5} fontSize="10" fill="#5D85EE" textAnchor="middle">
            {data.myData.moisture}
          </SvgText>
          <SvgText x={myPoints[1].x + 8} y={myPoints[1].y -4} fontSize="10" fill="#5D85EE" textAnchor="middle">
            {data.myData.sensitivity}
          </SvgText>
          <SvgText x={myPoints[2].x - 10} y={myPoints[2].y-2} fontSize="10" fill="#5D85EE" textAnchor="middle">
            {data.myData.oil}
          </SvgText>
        </Svg>

        {/* 🔹 범례 (Legend) */}
        <LegendContainer>
          <LegendItem>
            <LegendCircle color="#79A3FF" />
            <LegendText>나</LegendText>
          </LegendItem>
          <LegendItem>
            <LegendCircle color="#FFB6E2" />
            <LegendText>평균</LegendText>
          </LegendItem>
        </LegendContainer>
      </DescriptionBox>
    </Container>
  );
};

export default SkinBalance;

const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-bottom: 30px;
`;

const TitleText = styled.Text`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
`
const SmallText = styled.Text`
  font-weight: 500;
  color: #427DF0;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  margin-bottom: 20px;
`

const DescriptionBox = styled.View`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  align-items: baseline;
  justify-content: space-around;
  max-height: 280px;
  gap: 10px;
  padding-top: 25px;
  padding-horizontal: 10px;
`;

const LegendContainer = styled.View`
  flex-direction: col;
  margin-top: 10px;
  gap: 6px;
  position: absolute;
  top: 10px; right: 10px;
`;

const LegendItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
`;

const LegendCircle = styled.View<{ color: string }>`
  width: 7.05px;
  height: 7.05px;
  border-radius: 5px;
  background-color: ${({ color }) => color};
  margin-right: 5px;
`;

const LegendText = styled.Text`
  font-size: 8px;
  font-weight: 500;
  color: #081533;
`;