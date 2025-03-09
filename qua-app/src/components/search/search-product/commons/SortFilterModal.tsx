import React, { useEffect, useState } from "react";
import { Modal, StyleSheet, View, TouchableOpacity, Text, FlatList, TouchableWithoutFeedback } from "react-native";
import styled from "@emotion/native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

interface SortFilterModalProps {
  isVisible: boolean;
  onClose: () => void;
  selectedFilter: string;
  onSelectFilter: (filter: string) => void;
}

const filterMap: Record<string, string | null> = {
  '전체': null,
  'OMR': 'OMR',
  'AMS': 'AMS',
  'ODS': 'ODS',
  'ODR': 'ODR',
  'ADR': 'ADR',
  'OMS': 'OMS',
  'ADS': 'ADS',
  'AMR': 'AMR',
};

const categoryMap: Record<string, number> = {
  '스킨 / 토너': 1,
  '앰플 / 에센스 / 세럼': 2,
  '로션 / 에멀젼': 3,
  '크림': 4,
};
const CATEGORY_OPTIONS = ["스킨 / 토너", "앰플 / 에센스 / 세럼", "로션 / 에멀젼", "크림"];

const SortFilterModal: React.FC<SortFilterModalProps> = ({ isVisible, onClose, selectedFilter, onSelectFilter }) => {
  const [selectedSkinType, setselectedSkinType] = useState('전체');
  const [tempSelectedFilters, setTempSelectedFilters] = useState<string[]>([]);

  // ✅ 필터 선택 시 토글
  const toggleFilter = (filter: string) => {
    if (tempSelectedFilters.includes(filter)) {
      setTempSelectedFilters(tempSelectedFilters.filter((item) => item !== filter));
    } else {
      setTempSelectedFilters([...tempSelectedFilters, filter]);
    }
  };
  const opacity = useSharedValue(0); // ✅ Fade 효과를 위한 투명도 값
  const translateY = useSharedValue(300); // ✅ Slide 효과를 위한 Y 위치 값

  useEffect(() => {
    if (isVisible) {
      opacity.value = withTiming(1, { duration: 300 });
      translateY.value = withTiming(0, { duration: 300 });
    } else {
      opacity.value = withTiming(0, { duration: 300 });
      translateY.value = withTiming(300, { duration: 300 });
    }
  }, [isVisible]);

  const overlayStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const modalStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Modal transparent animationType="none" visible={isVisible}>
      {/* <Overlay onPress={onClose} /> */}
      <TouchableWithoutFeedback onPress={onClose}>
        <AnimatedOverlay style={overlayStyle}/>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={onClose}>
        <AnimatedContainer style={modalStyle}>
          <Title>인기순</Title>
          <FlatList
            data={Object.keys(filterMap)}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <FilterItem onPress={() => setselectedSkinType(item)}>
                <FilterText selected={selectedSkinType === item}>{item}</FilterText>
              </FilterItem>
            )}
          />

          <OptionContainer>
            {CATEGORY_OPTIONS.map((option) => (
              <OptionItem key={option} onPress={() => toggleFilter(option)}>
                <RadioButton selected={tempSelectedFilters.includes(option)} />
                <OptionText>{option}</OptionText>
              </OptionItem>
            ))}
          </OptionContainer>
        </AnimatedContainer>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default SortFilterModal;

/* 🔹 스타일 정의 */
const Overlay = styled.TouchableOpacity`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;


const AnimatedContainer = styled(Animated.View)`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: white;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 20px;
`;

const AnimatedOverlay = styled(Animated.View)`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  width: 100%;
  height: 100%;
`;

const FilterItem = styled.TouchableOpacity`
  padding-right: 16px;
  align-items: center;
  justify-content: center;
`
const FilterText = styled.Text<{ selected: boolean }>`
  font-size: 15px;
  font-weight: ${({ selected }) => (selected ? '600' : '500')};
  color: ${({ selected }) => (selected ? '#5D85EE' : '#AAAAAB')};
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const OptionContainer = styled.View`
  margin-top: 42px;
  margin-bottom: 40px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const OptionItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 26px;
  width: 45%;
`;

const RadioButton = styled.View<{ selected: boolean }>`
  width: 15px;
  height: 15px;
  border-radius: 10px;
  border: 1.5px solid #79A3FF;
  background-color: ${({ selected }) => (selected ? "#79A3FF" : "transparent")};
  margin-right: 10px;
`;

const OptionText = styled.Text`
  font-size: 14px;
  color: #081533;
  font-weight: 600;
`;
