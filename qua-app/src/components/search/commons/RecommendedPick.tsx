import styled from "@emotion/native";
import React from "react";
import { FlatList } from "react-native";
import { recommendedPick } from "../utils/constants";

const RecommendedPick: React.FC = () => {
  return (
    <SectionContainer>
      <SectionTitle>OMS 타입 쿠쿠아님을 위한 추천 PICK!</SectionTitle>
      <FlatList
        data={recommendedPick}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard>
            <ProductImage source={item.image} />
            <ProductName>{item.name}</ProductName>
            <ProductPrice>{item.price}</ProductPrice>
          </ProductCard>
        )}
        horizontal // ✅ 가로 스크롤
        showsHorizontalScrollIndicator={false}
      />
    </SectionContainer>
  );
};

export default RecommendedPick;

const SectionContainer = styled.View`
  margin-bottom: 20px;
  padding-horizontal: 17px;
`;

const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProductCard = styled.View`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  margin-right: 10px;
`;

const ProductImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

const ProductName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-top: 5px;
`;

const ProductPrice = styled.Text`
  font-size: 14px;
  color: #3a54aa;
  margin-top: 5px;
`;