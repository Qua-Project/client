import React from 'react';
import {Image} from 'react-native'
import styled from '@emotion/native';

interface SkinTypeStartCardProps {
  title: string;
  description: string;
  image: any;
  index: number;
}

const SkinTypeStartCard: React.FC<SkinTypeStartCardProps> = ({ title, description, image, index }) => {
  return (
    <Container>
      <IconImage source={image} index={index}/>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};
const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  font-family: 'Pretendard';
  text-align: center;
  color: white;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const IconImage = styled.Image<{index:number}>`
  margin-top: ${({index}) => ((index===2)? '40px': '10px')};
  justify-content: center;
  align-items: center;
`

const Description = styled.Text`
  font-size: 16px;
  width: 85%;
  font-weight: regular;
  text-align: center;
  font-family: 'Pretendard';
  color: white;
`;

const Container = styled.View`
  flex: 1;
  color: transparent;
  justify-content: center;
  align-items: center;
`

export default SkinTypeStartCard;
