import { useState } from "react";
import { ScrollView, TouchableOpacity, Text } from "react-native";
import styled from "@emotion/native";

const categories = [
  "전체",
  "OMR",
  "AMS",
  "ODS",
  "ODR",
  "ADR",
  "OMS",
  "ADS",
  "AMR",
];

export const IngredientComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  return (
    <IngredientComponentWrapper>
      <ScrollContainer>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category) => (
            <CategoryButton
              key={category}
              onPress={() => setSelectedCategory(category)}
              isSelected={selectedCategory === category}
            >
              <CategoryText isSelected={selectedCategory === category}>
                {category}
              </CategoryText>
            </CategoryButton>
          ))}
        </ScrollView>
      </ScrollContainer>
    </IngredientComponentWrapper>
  );
};

const IngredientComponentWrapper = styled.View`
  flex-direction: row;
  height: 17px;
  margin: 16px 18px 0 18px;
`;

const ScrollContainer = styled.View`
  width: 100%;
  height: 17px;
`;

const CategoryButton = styled(TouchableOpacity)<{ isSelected: boolean }>`
  border-radius: 20px;
  margin-right: 16px;
  height: 17px;
`;

const CategoryText = styled(Text)<{ isSelected: boolean }>`
  color: ${({ isSelected }) => (isSelected ? "#5D85EE" : "#AAAAAB")};
  font-weight: ${({ isSelected }) => (isSelected ? 600 : 500)};
  font-size: 14px;
`;
