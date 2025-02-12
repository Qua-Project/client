import styled from '@emotion/native';
import React from 'react';
import { ViewStyle, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface SkinTypeTestCardProps {
  question: string; // 질문 텍스트
  options: string[]; // 옵션 리스트
  selectedOptionIndex: number | undefined; // 선택된 옵션 인덱스
  onSelect: (optionIndex: number) => void; // 선택 이벤트 핸들러
  //style: ViewStyle;
}

// const PageItem = styled.View`
//   justify-content: center;
//   align-items: center;
//   border-radius: 20px;
// `;

const SkinTypeTestCard: React.FC<SkinTypeTestCardProps> = ({
  question,
  options,
  selectedOptionIndex,
  onSelect,
}) => {
  return (
    <Container>
      <Question>{question}</Question>
      <OptionContainer>
        {options.map((option, index) => (
          <Option
            selected={selectedOptionIndex === index}
            key={index}
            onPress={() => onSelect(index)} // 선택 이벤트 호출
          >
            <OptionText selected={selectedOptionIndex === index}>
              {option}
            </OptionText>
          </Option>
        ))}
      </OptionContainer>
    </Container>
  );
}

export default SkinTypeTestCard;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const Question = styled.Text`
  color: #081533;
  font-size: 20px;
  font-weight: bold;
  font-family: Pretendard;
  text-align: center;
  margin-bottom: 20px;
  margin-top: -20px;
`
const OptionText = styled.Text<{selected:boolean}>`
  color: ${({selected}) => (selected? '#FFFFFF': '#081533')};
  font-size: 14px;
  font-weight: regular;
  font-family: Pretendard;
  text-align: center;
`;
const OptionContainer = styled.View`
  flex-direction: row; 
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;
const Option = styled.TouchableOpacity<{selected:boolean}>`
  backgroundColor: ${({selected}) => (selected? 'rgba(93, 133, 238, 1)': 'rgba(255, 255, 255, 0.7)')};
  align-items: center;
  justify-content: center;
  width: 124px;
  height: 124px;
  aspect-ratio: 1;
  borderRadius: 10px;
`;
