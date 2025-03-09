import React from 'react';
import styled from '@emotion/native';
import { typeDetail } from '../utils/constants';

interface SkinTypeDeatilProps{
  skinType: string;
}
const SkinTypeDeatil: React.FC<SkinTypeDeatilProps> = ({skinType}) => {
  return (
    <Container>
      <Title>
        이 제품은 <SkinType>{skinType} 피부 타입</SkinType>에 <SkinType>적합</SkinType>해요!
      </Title>
      <ColContainer>
        {typeDetail.map((item, index) => (
          <DescriptionContainer key={index}>
            <TagContainer>
              <Spacer/>
              <Tag>{item.heshTag}</Tag>
            </TagContainer>
            
            <Description>{item.detail}</Description>
          </DescriptionContainer>
        ))}
      </ColContainer>
    </Container>
  );
};
const Container = styled.View`
  background-color: rgba(233, 240, 255, 1);
  padding-vertical: 14px;
  padding-horizontal: 20px;
  border-radius: 10px;
  margin-horizontal: 23px;
`;

const Title = styled.Text`
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  color: #081533;
  margin-bottom: 12px;
`;

const SkinType = styled.Text`
  color: #5D85EE;
`;

const ColContainer = styled.View`
  gap: 14px;
`
const DescriptionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const TagContainer = styled.View`
  width: 54px;
  flex-direction: row;
  align-items: flex-end;
  margin-right: 8px;
`
const Spacer = styled.View`
  flex:1;
  width: 100%;
`
const Tag = styled.Text`
  background-color: #5D85EE;
  color: white;
  font-size: 10px;
  line-height: 13px;
  font-weight: 600;
  padding: 2px 5px;
  border-radius: 3px;
`;

const Description = styled.Text`
  font-size: 10px;
  line-height: 11px;
  font-weight: 500;
  color: #081533;
  flex-shrink: 1;
`;

export default SkinTypeDeatil;
