import styled from "@emotion/native";
import React from "react";
import { FlatList } from "react-native";
import { rankingData } from "../utils/constants";

interface RecommendedPickItemProps{
  brand: string;
  name: string;
  price: string;
  score: string;
  image: any;
}
const RecommendedPickItem: React.FC<RecommendedPickItemProps> = ({score, brand, image, name, price}) => {
  return (
    <ProductCard>
      <ProductImageContainer>
        <ScoreContainer>
          <ProductScore>{score}점 상승</ProductScore>
        </ScoreContainer>
        <ProductImage source={image} />
      </ProductImageContainer>
      <ProductBrand>{brand}</ProductBrand>
      <ProductName>{name}</ProductName>
      <ProductPrice>{price}</ProductPrice>
    </ProductCard>
  );
};

export default RecommendedPickItem;

const ProductCard = styled.View`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  margin-right: 10px;
  flex-direction: col;
  align-items: center;
`;

const ProductImageContainer = styled.View`
  position: relative;
  height: 100px;
  width: 90px;
  align-items: center;
`

const ProductImage = styled.Image`
  width: 90px;
  height: 90px;
  bottom: 0;
  position: absolute;
`;

const ScoreContainer = styled.View`
  background-color: #3A54AA;
  border-radius: 10px;
  padding-horizontal: 8px;
  padding-vertical: 3px;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 100;
  top: 0;
`
const ProductScore = styled.Text`
  font-size: 6px;
  font-family: Pretendard;
  font-weight: 600;
  color: white;
  text-align: center;
`

const ProductName = styled.Text`
  font-size: 10px;
  font-weight: 500;
  color: #081533;
  line-height: 15px;
  margin-bottom: 2px;
`;

const ProductPrice = styled.Text`
  font-size: 12px;
  line-height: 18px;
  font-weight: 600;
  color: #3A54AA;
`;

const ProductBrand = styled.Text`
  font-size: 8px;
  line-height: 12px;
  font-weight: 500;
  color: #818182;
  text-align: center;
`;