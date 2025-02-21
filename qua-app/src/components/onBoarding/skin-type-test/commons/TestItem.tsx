import React, { useState, useRef, useEffect } from 'react';
import { ScrollView, Dimensions, View, StyleSheet, Text, Animated, FlatList} from 'react-native';
import SkinTypeTestCard from './SkinTypeTestCard';
import { LinearGradient } from 'expo-linear-gradient';
import styled from '@emotion/native';
import { TEST_SLIDE_DATA,TestSlideDataType } from '../utils/constants';
const screenWidth = Math.round(Dimensions.get('window').width);
import { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';

interface TestItemProps{
  item: TestSlideDataType;
  index: number;
  scrollX: SharedValue<number>;
}
const {width} = Dimensions.get('screen');
const TestItem:React.FC<TestItemProps> = ({item, index, scrollX}) => {
  const rnAnimatedStyle = useAnimatedStyle(() => {
    return{
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index-1) * width, index*width, (index+1)*width],
            [-width *0.25, 0, width*0.25],
            Extrapolation.CLAMP
          ),
        }
      ]
    }
  })
  return (
    <Animated.View style={[styles.itemContainer, rnAnimatedStyle]}>
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
            {/* <Question>{item.question}</Question> */}
            {item.question.split(" ").map((word, index) => (
              <Question key={`${word}-${index}`}>
                {word}{" "}
              </Question>
            ))}
            {(item.description != null ? <DescriptionText>{item.description}</DescriptionText>: <></>)}
          </QuestionContainer>
        </OuterContainer>

        <OptionContainer index={item.id}>
          {item.options.map((option, index) => (
            <Option key={index} index={item.id}>
              <OptionText >
                {option}
              </OptionText>
            </Option>
          ))}
        </OptionContainer>
      </AnimatedCardContainer>
    </Animated.View>
  );
}

export default TestItem;

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: '100%',
    paddingHorizontal: 30
  }
})
const Container = styled.View<{width: number}>`
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

const OptionText = styled.Text`
  color: #081533;
  font-size: 12px;
  font-weight: regular;
  font-family: Pretendard;
  text-align: center;
`;
const OptionContainer = styled.View<{index: number}>`
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 70%;
  gap: ${({ index }) => index==11?'8px':'12px'};
`;
const Option = styled.TouchableOpacity<{index: number}>`
  backgroundColor: 'rgba(255, 255, 255, 0.7)';
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


