import React from 'react';
import { Dimensions, StyleSheet, Animated} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styled from '@emotion/native';
import { TestSlideDataType } from '../utils/constants';
import { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';

interface TestItemProps{
  item: TestSlideDataType;
  index: number;
  scrollX: SharedValue<number>;
  selectedOptions: { [key: number]: number | null }; 
  onSelectOption: (questionId: number, optionIndex: number) => void; 
}
const {width} = Dimensions.get('screen');
const TestItem:React.FC<TestItemProps> = ({item, index, scrollX, selectedOptions, onSelectOption }) => {
  const rnAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          scrollX.value,
          [(index-1) * width, index*width, (index+1)*width],
          [-width *0.25, 0, width*0.25],
          Extrapolation.CLAMP
        ),
      },
      {
        scale: interpolate(
          scrollX.value,
          [(index-1) * width, index*width, (index+1)*width],
          [0.9, 1, 0.9],
          Extrapolation.CLAMP
        ),
      }
    ],
  }));
  return (
    <Container width={width} style={rnAnimatedStyle}>
      <AnimatedCardContainer
        colors={[
          'rgba(255, 255, 255, 0.8)',
          'rgba(255, 255, 255, 0.66)',
        ]}
        start={{ x: 0, y: 0 }} 
        end={{ x: 0.3, y: 0.3  }}   
      >
        <OuterContainer>
          <QuestionContainer>
            {item.question.split(" ").map((word, index) => (
              <Question key={`${word}-${index}`}>
                {word}{" "}
              </Question>
            ))}
            {(item.description && <DescriptionText>{item.description}</DescriptionText>)}
          </QuestionContainer>
        </OuterContainer>

        <OptionContainer index={item.id}>
          {item.options.map((option, index) => {
            let numColumns = 0;
            if (item.id === 11){
              numColumns = 3;
            }else {
              numColumns = 2;
            }
            const row = Math.floor(index / numColumns);
            const col = index % numColumns;
            const adjustedIndex = col + row * numColumns;
            
            return (<Option 
              key={adjustedIndex} 
              index={item.id}
              selected={selectedOptions[item.id] === adjustedIndex + 1}
              onPress={() => {onSelectOption(item.id, adjustedIndex);}}
            >
              <OptionText selected={selectedOptions[item.id] === adjustedIndex + 1}>
                {option}
              </OptionText>
            </Option>)
        })}
        </OptionContainer>
      </AnimatedCardContainer>
    </Container>
  );
}

export default TestItem;

const Container = styled(Animated.View)<{width: number}>`
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width+'px'};
  height: 100%;
  padding-horizontal: 30px;
`

const AnimatedCardContainer = styled(LinearGradient)`
  border-radius: 10px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 85%;
`;

const OuterContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 20%;
  margin-top: 20px;
`

const QuestionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
const Question = styled.Text`
  color: #081533;
  font-size: 20px;
  font-weight: bold;
  font-family: Pretendard;
`

const DescriptionText = styled.Text`
  color: #5D85EE;
  font-size: 14px;
  font-weight: 500;
  font-family: Pretendard;
  text-align: center;
`

const OptionText = styled.Text<{ selected: boolean }>`
  color: ${({ selected }) => (selected ? '#FFFFFF' : '#081533')};
  font-size: 12px;
  font-weight: regular;
  font-family: Pretendard;
  text-align: center;
`;
const OptionContainer = styled.View<{index: number}>`
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 70%;
  gap: ${({ index }) => index==11?'8px':'12px'};
`;
const Option = styled.TouchableOpacity<{index: number; selected: boolean}>`
  background-color: ${({ selected }) => (selected ? '#5D85EE' : 'rgba(255, 255, 255, 0.7)')};
  align-items: center;
  justify-content: center;
  width: ${({ index }) => index==11?'85px':'125px'};
  aspect-ratio: 1;
  borderRadius: 10px;
`;
// const OptionText = styled.Text<{selected:boolean}>`
//   color: ${({selected}) => (selected? '#FFFFFF': '#081533')};
//   font-size: 12px;
//   font-weight: regular;
//   font-family: Pretendard;
//   text-align: center;
// `;
// const Option = styled.TouchableOpacity<{selected:boolean}>`
//   backgroundColor: ${({selected}) => (selected? 'rgba(93, 133, 238, 1)': 'rgba(255, 255, 255, 0.7)')};
//   align-items: center;
//   justify-content: center;
//   width: 124px;
//   height: 124px;
//   aspect-ratio: 1;
//   borderRadius: 10px;
// `;


