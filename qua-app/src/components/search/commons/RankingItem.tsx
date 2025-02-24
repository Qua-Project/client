import styled from "@emotion/native";
import React from "react";
import { FlatList } from "react-native";
import { rankingData } from "../utils/constants";

interface RankingItemProps{
  rank: number;
  brand: string;
  name: string;
  price: string;
  image: any;
}
const RankingItem: React.FC<RankingItemProps> = ({brand, image, name, price, rank}) => {
  return (
    <RankingItemContainer>
      <RankBadge>{rank}</RankBadge>
      <ProductImage source={image} />
      <ProductInfo>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
      </ProductInfo>
    </RankingItemContainer>
  );
};

export default RankingItem;

const RankingItemContainer = styled.View`
  width: 100%;
  height: 90px;
`
const ProductInfo = styled.View`
  flex-direction: row;
  gap: 30px;
`
const ProductImage = styled.Image`
  width: 55px;
  height: 55x;
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

const RankBadge = styled.Text`
  background-color: yellow;
  padding: 5px 10px;
  border-radius: 50px;
  font-weight: bold;
  margin-right: 10px;
`;