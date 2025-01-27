import React, { ReactNode } from 'react';
import {Image} from 'react-native'
import styled from '@emotion/native';

interface SkinTypeStartCardProps {
  title: string;
  description: string;
  //svg: React.FC<SvgProps>; // SVG XML 코드 문자열
  image: any;
}

const SkinTypeStartCard: React.FC<SkinTypeStartCardProps> = ({ title, description, image }) => {
  return (
    <Container>
      <Image source={image}/>
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
  margin-top: 20px;
`;

const Description = styled.Text`
  font-size: 16px;
  width: 85%;
  font-weight: regular;
  text-align: center;
  font-family: 'Pretendard';
  color: white;
  margin-bottom: 20px;
`;

const Container = styled.View`
  flex: 1;
  color: transparent;
  justify-content: center;
  align-items: center;
`

export default SkinTypeStartCard;
