import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from '@emotion/native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

const GradientText = ({ text, style }: { text: string; style?: any }) => {
  return (
    <MaskedView maskElement={<Text style={[style, { color: 'black' }]}>{text}</Text>}>
      <LinearGradient
        colors={['#5D85EE', '#3A54AA']} // 🔥 원하는 그라데이션 색상
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={[style, { opacity: 0 }]}>{text}</Text> 
      </LinearGradient>
    </MaskedView>
  );
}

const SkinTypeDescription = () => {
  
  return (
    <Container>
      {/* 🔹 피부 타입 이미지 */}
      <SkinImage source={require('@/assets/onBoarding/skintype_oms.png')} resizeMode="cover" />

      {/* 🔹 피부 타입 텍스트 */}
      <SkinTypeText>OMS</SkinTypeText>

      {/* 🔹 해시태그 */}
      <HashtagText># 지성   # 수분충분   # 민감</HashtagText>

      {/* 🔹 설명 박스 */}
      <DescriptionBox>
        <DescriptionTextBox>
          <DescriptionText>
            OMS 피부 타입은 <HighlightText>유분과 수분이 풍부</HighlightText>하지만,{' '}
            <HighlightText>{'\n'}외부 자극에 민감</HighlightText>한 피부를 말해요.
          </DescriptionText>
        </DescriptionTextBox>
        <ListCol>
          <ListRow>
            <ListItem>🌟</ListItem>
            <ListItem>유분이 많아 모공이 넓어지고 트러블이 생기기 쉬워요.</ListItem>
          </ListRow>
          <ListRow>
            <ListItem>🌟</ListItem>
            <ListItem>수분은 충분해 건조함을 크게 느끼지 않아요.</ListItem>
          </ListRow>
          <ListRow>
            <ListItem>🌟</ListItem>
            <ListItem>민감하여 특정 성분이나 환경 변화로 쉽게 자극 받아{'\n'}붉어지거나 따가움을 느낄 수 있어요.</ListItem>
          </ListRow>
        </ListCol>
        <FinalRow>
          <MaskedView maskElement={<FinalText style={{width:8, fontSize: 16, fontWeight: 500 }}>"</FinalText>}>
            <LinearGradient
              colors={['#5D85EE', '#3A54AA']} // 🔥 원하는 그라데이션 색상
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <FinalText style={{ width:8, fontSize: 16, fontWeight: 500, opacity: 0 }}>"</FinalText> 
            </LinearGradient>
          </MaskedView>
          <MaskedView maskElement={<FinalText style={{width:170}}>이러한 피부는 유분과 민감성에 맞춘 균형 잡힌 관리가 필요합니다!</FinalText>}>
            <LinearGradient
              colors={['#5D85EE', '#3A54AA']} // 🔥 원하는 그라데이션 색상
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <FinalText style={{ width:170,opacity: 0 }}>이러한 피부는 유분과 민감성에 맞춘 균형 잡힌 관리가 필요합니다!</FinalText> 
            </LinearGradient>
          </MaskedView>
          <MaskedView maskElement={<FinalText style={{width:8, fontSize: 16, fontWeight: 500}}>"</FinalText>}>
            <LinearGradient
              colors={['#5D85EE', '#3A54AA']} // 🔥 원하는 그라데이션 색상
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <FinalText style={{ width:8, fontSize: 16, fontWeight: 500,opacity: 0 }}>"</FinalText> 
            </LinearGradient>
          </MaskedView>
        </FinalRow>
      </DescriptionBox>
    </Container>
  );
};

export default SkinTypeDescription;

const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-horizontal: 10px;
  margin-bottom: 30px;
`;


const SkinImage = styled.Image`
  width: 267px;  // 이미지 크기 조절
  height: 215px;
  margin-bottom: 10px;
`;

const SkinTypeText = styled.Text`
  font-size: 30px;
  font-weight: 600;
  color: #081533;
  margin-bottom: 5px;
`;

const HashtagText = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: #3A54AA;
  margin-bottom: 25px;
`;

const DescriptionBox = styled.View`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  max-height: 243px;
  max-width: 302px;
  margin-horizontal: 11px;
  gap: 10px;
  padding-vertical: 16px;
  padding-horizontal: 25px;
`;

const DescriptionTextBox = styled.View`
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom-width: 1px;
  border-color: #DBDBDB;
`
const DescriptionText = styled.Text`
  font-size: 14px;
  color: #081533;
  text-align: center;
  line-height: 20px;
  font-weight: bold;
`;

const HighlightText = styled.Text`
  color: #5D85EE;
  font-weight: bold;
`;

const ListCol = styled.View`
  flex-direction: col;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
`;

const ListRow = styled.View`
  flex-direction: row;
  align-items: fles-start;
  gap: 3px;
`
const ListItem = styled.Text`
  font-size: 12px;
  font-weight: 500;
  word-break: keep-all;
  color: #333;
  margin-bottom: 5px;
  text-align: left;
`;

const FinalRow = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding-horizontal: 20px;
`
const FinalText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`;
