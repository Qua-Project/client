import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from '@emotion/native';

interface ExploreDresserItemProps{
  image: any; 
  score: number;
}

const ExploreDresserItem:React.FC<ExploreDresserItemProps> =({image, score}) => {
  return (
    <Container>
      <ProfileImage source={image} resizeMode="contain" />
      <DresserScore>{score}점</DresserScore>
    </Container>
  );
};

export default ExploreDresserItem;

// const Container = styled.View`
//   width: 110px;
//   height: 180px;
//   background-color: white;
//   border-radius: 10px;
//   border: 1px solid #E0E0E0;
//   align-items: center;
//   justify-content: center;
//   margin-right: 10px;
//   padding: 10px;
// `;

const Container = styled.View`
  flex-direcotion: col;
  backgorund-color: #000000;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  gap:8px;
  background-color: #E5EDFF;
  width: 103px;
  height: 127px;
  border-radius: 10px;
`;

/* 🔹 제품 이미지 */
const ProfileImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  align-items: center;
  justify-content: center;
  resize-mode: cover;
`;

const DresserScore = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #F2F2F2;
  padding-vertical: 2px;
  padding-horizontal: 21px;
  background-color: #5D85EE;
  border-radius: 30px;
`;