import React from 'react';
import styled from '@emotion/native';
import { TipType } from '../utils/constants';

interface SkinCareTipProps {
  index: number;
  type: TipType;
  tip: { 
    title: string; 
    description: string;
  };
}

const SkinCareTip: React.FC<SkinCareTipProps> = ({ index,type, tip }) => {
  const iconSource = type === 'care' 
    ? require('@/assets/onBoarding/caretip.png') 
    : require('@/assets/onBoarding/cautiontip.png');

    
  return (
    <ContentItem key={index}>
      <Icon source={iconSource} />
      <ContentTextBox>
          <BoldText>{tip.title}</BoldText> 
          <ContentText>{tip.description}</ContentText>        
      </ContentTextBox>
    </ContentItem>
  );
};

export default SkinCareTip;

const ContentItem = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding-right: 30px;
  gap:5px;
`;

const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;

const ContentTextBox = styled.View`
  flex-direction: col;
  align-items: flex-start;
  gap: 4px;
  margin-top:1px;
`;

const ContentText = styled.Text`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  word-break: keep-all;
  color: #818182;
  margin-bottom: 5px;
  text-align: left;
`;

const BoldText = styled.Text`
  font-size: 14px;
  font-weight: 700;
`;
