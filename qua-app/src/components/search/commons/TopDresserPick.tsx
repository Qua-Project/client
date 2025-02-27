import styled from "@emotion/native";
import React from "react";
import { topDresserPick } from "../utils/constants";
import { FlatList } from "react-native";

const TopDresserPick: React.FC = () => {
  return (
    <SectionContainer>
      <SectionTitle>OMS 타입 상위권 화장대 PICK!</SectionTitle>
      <ContentContainer>
        {topDresserPick.map((user) => (
          <UserSection key={user.id}>
            <UserRow>
              <UserProfile source={require('@assets/search/profile.png')} />
              <UserName>{user.user}</UserName>
              <UserScoreContainer>
                <UserScore>{user.score}</UserScore>
              </UserScoreContainer>
            </UserRow>
            <ColDivider/>
            <FlatList
              data={user.products}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ProductCard>
                  <ProductImage source={item.image} />
                  <ProductInfo>
                    <ProductBrand>{item.brand}</ProductBrand>
                    <ProductName>{item.name}</ProductName>
                    <ProductPrice>{item.price}</ProductPrice>
                  </ProductInfo>
                </ProductCard>
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={()=> <RowDivider/>}
            />
          </UserSection>
        ))}
      </ContentContainer>
    </SectionContainer>
  );
};

export default TopDresserPick;

const SectionContainer = styled.View`
  margin-bottom: 20px;
  padding-horizontal: 17px;
`;

const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ContentContainer = styled.View`
  width: 100%;
  background-color: white;
  border-radius: 10px;
  margin-horizontal: 1px;
`

const ProductCard = styled.View`
  flex-direction: row;
  margin-left: 12px;
  justify-content: center;
  align-items: center
  padding-vertical: 18px;
`;

const ProductInfo = styled.View`
  flex-direction: col;
  justify-content: flex-start;
  align-items: center;
  padding-left: 7px;
  padding-top: 
`

const ProductImage = styled.Image`
  width: 57px;
  height: 57px;
  border-color: #E5EDFF;
  border: 1px;
`;

const ProductBrand = styled.Text`
  font-size: 8px;
  font-weight: 500;
  line-height: 12px;
  color: #818182;
  text-align: center;
`;

const ProductName = styled.Text`
  font-size: 10px;
  font-weight: 500;
  margin-bottom: 3px;
  line-height: 15px;
  color: #081533;
  text-align: center;
`;

const ProductPrice = styled.Text`
  font-size: 12px;
  color: #3A54AA;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
`;

const UserSection = styled.View`
  margin-bottom: 15px;
`;

const UserRow = styled.View`
  flex-direction: row;
  align-items: center;
  padding-vertical: 13px;
  padding-left: 13px;
  margin-right: 9px;
`;

const UserProfile = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 20px;
  margin-right: 14px;
`;

const UserName = styled.Text`
  font-size: 15px;
  font-weight: 600;
`;

const UserScoreContainer = styled.View`
  background-color: #5d85ee;
  width: 47px;
  height: 20px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: 200px;
  justify-content: center;
  align-items: center

`
const UserScore = styled.Text`
  color: white;
  font-size: 10px;
  font-weight: 600;
`;

const ColDivider = styled.View`
  height: 0.7px;
  background-color: #5D85EE;
  width: 100%;
  margin-vertical: 0.5px;
`
const RowDivider = styled.View`
  width: 0.7px;
  background-color: #5D85EE;
  height: 57px;
  margin-horizontal: 7px;
  margin-vertical: 18px;
`