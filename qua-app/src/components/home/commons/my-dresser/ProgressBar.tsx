import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import styled from '@emotion/native';

interface ProgressBarProps {
  progress: number; // ✅ 0~1 값 (예: 0.68 → 68%)
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const width = 208; // ✅ 바 전체 길이
  const height = 8; // ✅ 바 높이
  const fillWidth = width * progress; // ✅ 퍼센트 값 반영

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}>
      {/* ✅ 그라데이션 적용된 Progress */}
      <Svg width={width} height={height}>
        <Defs>
          <LinearGradient id="progressGradient" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0%" stopColor="#9EBBFF" />
            <Stop offset="100%" stopColor="#3A54AA" />
          </LinearGradient>
        </Defs>

        {/* ✅ 흰색 배경 바 */}
        <Rect x="0" y="0" width={width} height={height} strokeWidth='0.5px' stroke="#DBDBDB" fill="#FFFFFF" rx={height / 2} />

        {/* ✅ 퍼센트 만큼 채워진 그라데이션 바 */}
        <Rect x="0" y="0" width={fillWidth} height={height} fill="url(#progressGradient)" rx={height / 2} />
      </Svg>
    </View>
  );
};

export default ProgressBar;

const ProgressText = styled.Text`
  font-size: 12px;
  color: #081533;
  margin-left: 5px;
`;
