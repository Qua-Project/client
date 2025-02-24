import styled from "@emotion/native";
import React from "react";
import { topDresserPick } from "../utils/constants";
import { FlatList } from "react-native";

const TopDresserPick: React.FC = () => {
  return (
    <SectionContainer>
      <SectionTitle>OMS 타입 상위권 화장대 PICK!</SectionTitle>
      {topDresserPick.map((user) => (
        <UserSection key={user.id}>
          <UserRow>
            <UserProfile source={require('@assets/search/profile.png')} />
            <UserName>{user.user}</UserName>
            <UserScore>{user.score}</UserScore>
          </UserRow>
          <FlatList
            data={user.products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ProductCard>
                <ProductImage source={item.image} />
                <ProductName>{item.name}</ProductName>
                <ProductPrice>{item.price}</ProductPrice>
              </ProductCard>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </UserSection>
      ))}
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

const UserSection = styled.View`
  margin-bottom: 15px;
`;

const UserRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

const UserProfile = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
`;

const UserName = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const UserScore = styled.Text`
  background-color: #5d85ee;
  color: white;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 14px;
  margin-left: auto;
`;