import React from 'react';
import { View } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import styled from '@emotion/native';

interface ProgressBarProps {
  progress: number; 
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const width = 208;
  const height = 8; 
  const fillWidth = width * progress;

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}>
      <Svg width={width} height={height}>
        <Defs>
          <LinearGradient id="progressGradient" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0%" stopColor="#9EBBFF" />
            <Stop offset="100%" stopColor="#3A54AA" />
          </LinearGradient>
        </Defs>

        <Rect x="0" y="0" width={width} height={height} strokeWidth='0.5px' stroke="#DBDBDB" fill="#FFFFFF" rx={height / 2} />

        <Rect x="0" y="0" width={fillWidth} height={height} fill="url(#progressGradient)" rx={height / 2} />
      </Svg>
    </View>
  );
};

export default ProgressBar;
