import styled from '@emotion/native';
import React from 'react';

interface SkinTypeTestCardProps {
  question: string; 
  options: string[]; 
  selectedOptionIndex: number | undefined; 
  onSelect: (optionIndex: number) => void; 
}

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
            onPress={() => onSelect(index)} 
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
  font-size: 18px;
  font-weight: bold;
  font-family: Pretendard;
  text-align: center;
  margin-bottom: 20px;
  margin-top: -20px;
`
const OptionText = styled.Text<{selected:boolean}>`
  color: ${({selected}) => (selected? '#FFFFFF': '#081533')};
  font-size: 12px;
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
