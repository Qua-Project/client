import React from 'react';
import styled from '@emotion/native';
import { LinearGradient } from 'expo-linear-gradient';
import ProgressBar from './ProgressBar';
import { Dimensions } from 'react-native';
 
// 화면 너비, 높이 구하는 방법
const windowWidth = Dimensions.get('window').width;
const effects = [
  { id: "1", label: "피지조절", icon: require("@assets/search/productAnalysis/effect/pore_care_active.png") },
  { id: "2", label: "진정", icon: require("@assets/search/productAnalysis/effect/settledown_active.png") },
  { id: "3", label: "모공케어", icon: require("@assets/search/productAnalysis/effect/sebumcontrol_active.png") },
];

const ingredients = [
  { id: "1", label: "피지조절", percentage: 68 },
  { id: "2", label: "진정", percentage: 80 },
  { id: "3", label: "모공케어", percentage: 40 },
];

const FitAnalysisCard: React.FC = () => {
  return (
    <GradientBackground
      colors={[
        'rgba(205, 221, 255, 0.24)',
        'rgba(229, 237, 255, 1)',
      ]}
      start={{ x: 0, y: 0.5 }} 
      end={{ x: 1, y: 0.5  }}   
    >
      <Title>내 피부 맞춤 분석</Title>

      {/* ✅ 내 피부에 필요한 효과 */}
      <SubTitle>내 피부에 필요한 효과</SubTitle>
      <EffectContainer>
        {effects.map((effect) => (
          <EffectItem key={effect.id}>
            <EffectImage source={effect.icon} />
            <EffectText>{effect.label}</EffectText>
          </EffectItem>
        ))}
      </EffectContainer>

      {/* ✅ 제품의 성분 함량도 */}
      <SubTitle>제품의 성분 함량도</SubTitle>
      <ProgressBarContainer>
        {ingredients.map((item) => (
          <ProgressBarItemContainer key={item.id}>
            <SkinDataRow>
              <SkinDataLabel>{item.label}</SkinDataLabel>
              <SkinDataLabel>{item.percentage}%</SkinDataLabel>
            </SkinDataRow>
            <ProgressBar progress={item.percentage/100} progressBarWidth={windowWidth-90}/>
          </ProgressBarItemContainer>
        ))}
      </ProgressBarContainer>

      {/* ✅ 내 피부 관련 주의 성분 */}
      <SubTitle>내 피부 관련 주의 성분</SubTitle>
      <WarningBox>
        <WarningText>주의 성분이 없어요!</WarningText>
      </WarningBox>

      {/* ✅ 제품의 전체 성분 */}
      <SubTitle>제품의 전체 성분</SubTitle>
      <IngredientBox>
        <IngredientTextBox>
          <IngredientTitle>주요 성분</IngredientTitle>
          <IngredientText>※ 내 피부에 필요한 성분입니다.</IngredientText>
        </IngredientTextBox>
        {/* <IngredientDivider/> */}
        <IngredientDetail>
          정제수 다이부틸아디페이트 프로판다이올 디에칠아미노하이도 나이아신아마이드
        </IngredientDetail>
        <IngredientTextBox>
          <IngredientTitle>전체 성분</IngredientTitle>
          <IngredientText>※ 제품에 포함된 함량이 많은 순서대로 표기되었습니다.</IngredientText>
        </IngredientTextBox>
        {/* <IngredientDivider/> */}
        <IngredientDetail>
          정제수 다이부틸아디페이트 프로판다이올 디에칠아미노하이도 나이아신아마이드 글리세린 부틸렌글라이콜 자작나무수액 다이포타슘글리시리제이트 알란토인 쇠비름추출물 개똥쑥추출물
        </IngredientDetail>
      </IngredientBox>
    </GradientBackground>
  );
};

const GradientBackground = styled(LinearGradient)`
  align-items: center;
  padding-vertical: 12px;
  padding-horizontal: 22px;
  border-radius: 10px;
  margin-horizontal: 23px;
  margin-bottom: 44px;
  border: 1px rgba(203, 219, 255, 1);
  border-radius: 20px;
`;
const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  text-align: center;
  margin-bottom: 12px;
`;

const SubTitle = styled.Text`
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  margin-bottom: 8px;
  color: rgba(66, 125, 240, 1);
`;

const EffectContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  margin-bottom: 32px;
`;

const EffectImage = styled.Image`
  background-color: rgba(255, 255, 255, 1);
  width: 52px;
  height: 52px;
  border-radius: 8px;
  padding: 10px;
`

const EffectText = styled.Text`
  font-size: 10px;
  color: #081533;
  margin-top: 4px;
  font-weight: 700;
  line-height: 15px;
`;

const EffectItem = styled.View`
  align-items: center;
`;

const ProgressBarContainer = styled.View`
  flex-direction: col;
  width: 100%;
  gap: 4px;
  margin-bottom: 32px;
`;
const ProgressBarItemContainer = styled.View`
  width: 100%;
  gap: 2px;
`;

const SkinDataRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: -2px;
`;

const SkinDataLabel = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: #081533;
  line-height: 18px;
`;


const WarningBox = styled.View`
  background-color: #CBDBFF;
  margin-horizontal: 22px;
  width: 100%;
  padding-vertical: 22px;
  border-radius: 8px;
  align-items: center;
  margin-bottom: 32px;
`;

const WarningText = styled.Text`
  font-size: 11px;
  line-height: 16.5px;
  font-weight: 500;
  color: #818182;
`;

const IngredientBox = styled.View`
  background-color: #CBDBFF;
  margin-horizontal: 22px;
  width: 100%;
  padding-top: 16px;
  padding-horizontal: 27px;
  border-radius: 8px;
  align-items: center;
  margin-bottom: 12px;
`;

const IngredientTextBox = styled.View`
  position: relative;
  width: 100%;
  height: 24px;
  padding-botton: 4px;
  margin-bottom: 4px;
  border-bottom-width: 1px;
  border-bottom-color: #081533;
`
const IngredientTitle = styled.Text`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 12px;
  line-height: 18px;
  font-weight: 700;
  color: #081533;
  margin-bottom: 5px;
`;

const IngredientText = styled.Text`
  position: absolute;
  bottom: 4;
  right: 0;
  font-size: 8px;
  line-height: 12px;
  font-weight: 500;
  color: #818182;
`;

const IngredientDetail = styled.Text`
  font-size: 11px;
  width: 100%;
  line-height: 16.5px;
  font-weight: 500;
  color: #081533;
  margin-bottom: 16px;
`;

export default FitAnalysisCard;
