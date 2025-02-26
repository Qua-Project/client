import { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styled from "@emotion/native";

const categories = ["추천순", "인기순", "점수순"];

export const RankButtonComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState("추천순");

  return (
    <RankButtonComponentWrapper>
      {categories.map((category) => (
        <RankButton
          key={category}
          onPress={() => setSelectedCategory(category)}
          isSelected={selectedCategory === category}
        >
          <RankText isSelected={selectedCategory === category}>
            {category}
          </RankText>
        </RankButton>
      ))}
    </RankButtonComponentWrapper>
  );
};

const RankButtonComponentWrapper = styled.View`
  flex-direction: row;
  align-self: flex-start;
  margin-top: 16px;
  margin-left: 18px;
`;

const RankButton = styled(TouchableOpacity)<{ isSelected: boolean }>`
  border-radius: 20px;
  margin-right: 8px;
  width: 61px;
  height: 25px;
  background-color: ${({ isSelected }) => (isSelected ? "#E5EDFF" : "#FFFFFF")};
  border: solid 1px;
  border-color: ${({ isSelected }) => (isSelected ? "#5D85EE" : "#AAAAAB")};
`;

const RankText = styled(Text)<{ isSelected: boolean }>`
  color: ${({ isSelected }) => (isSelected ? "#5D85EE" : "#AAAAAB")};
  font-weight: ${({ isSelected }) => (isSelected ? 600 : 500)};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.family.regular};
  text-align: center;
  padding-top: 3px;
`;
