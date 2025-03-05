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
      <ProductImageContainer>
        <ProductImage source={image}/>
        <RankBadgeContainer>
          <RankBadge>{rank}</RankBadge>
        </RankBadgeContainer>
      </ProductImageContainer>
      <ProductInfo>
        <ProductBrand>{brand}</ProductBrand>
        <ProductName>{name}</ProductName>
      </ProductInfo>
      <DynamicSpacer/>
      <ProductPriceContainer>
        <ProductPrice>{price}</ProductPrice>
      </ProductPriceContainer>
    </RankingItemContainer>
  );
};

export default RankingItem;

const RankingItemContainer = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 8px;
  margin-bottom: 8px;
`
const DynamicSpacer = styled.View`
  flex: 1;  
  background-color: transparent;
`;

const ProductInfo = styled.View`
  padding-top: 15px;
  margin-left: 7px;
  flex-direction: col;
  gap: 3px;
`
const ProductImageContainer = styled.View`
  margin-left: 12px;
  position: relative;
  align-items: flex-end;
  justify-content: flex-end;
  width: 70px;
  height: 70px;
`
const ProductImage = styled.Image`
  width: 55px;
  height: 55px;
`;

const ProductName = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: #000000;
`;
const ProductBrand = styled.Text`
  font-size: 10px;
  font-weight: 500;
  color: #959595;
`;
const ProductPriceContainer = styled.View`
  align-items: flex-end;
  justify-content: center;
`
const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #3A54AA;
  margin-right: 30px;
`;
const RankBadgeContainer = styled.View`
  position: absolute;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  top: 0px;
  left: 0px;
  background-color: #FFFB8B;
  border-radius: 30px;
`
const RankBadge = styled.Text`
  text-align: center;
  font-weight: 400;
  font-size: 18px;
  color: #081533
`;