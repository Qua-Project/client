import React from 'react';
import styled from '@emotion/native';
import Slider from '@react-native-community/slider';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { interpolateColor } from 'react-native-reanimated';



const SkinTypeDetail:React.FC = () => {
  const myData= {moisture: 65, oil: 78, sensitivity: 50};
  const effectList = [
  { active: false, label: '보습', icon: require('@/assets/onBoarding/moisturizing.png') },
  { active: true, label: '피지조절', icon: require('@/assets/onBoarding/sebumcontrol_active.png') },
  { active: true, label: '진정', icon: require('@/assets/onBoarding/settledown_active.png') },
  { active: false, label: '모공케어', icon: require('@/assets/onBoarding/pore_care.png') },
  { active: false, label: '미백', icon: require('@/assets/onBoarding/whitening.png') },
  { active: false, label: '장벽강화', icon: require('@/assets/onBoarding/strengtheningbarriers.png') },
  { active: true, label: '탄력강화', icon: require('@/assets/onBoarding/elasticitystrengthening_active.png') },
  { active: false, label: '각질제거', icon: require('@/assets/onBoarding/exfoliation.png') },
  { active: false, label: '트러블케어', icon: require('@/assets/onBoarding/troublecare.png') },
  { active: false, label: '유기자차', icon: require('@/assets/onBoarding/chemical.png') },
  { active: false, label: '무기자차', icon: require('@/assets/onBoarding/physical.png') },
  { active: false, label: '약산성', icon: require('@/assets/onBoarding/mildacidity.png') },
];

  return (
    <Container>
      <DescriptionBox
        colors={[
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 0.6)',
        ]}
        start={{ x: 0, y: 0 }} 
        end={{ x: 0.55, y: 0.55  }}  
      >
        <Title>피부 타입</Title>

        <Section>
          <SectionTitle>
            유분도: <Highlight style={{ color: 'rgba(236, 182, 113, 1)'}}>{myData.oil}%</Highlight> 지성 타입
          </SectionTitle>
          <SliderWrapper>
            <GradientTrack colors={['rgba(255, 240, 144, 0.5)','rgba(255, 240, 144, 1)']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} />
            <StyledSlider
              value={myData.oil / 100}
              minimumTrackTintColor="transparent" 
              maximumTrackTintColor="transparent" 
              thumbTintColor="transparent" 
              minimumValue={0}
              maximumValue={1}
              disabled
            />
            <ThumbMarker style={{ left: `${myData.oil}%`, backgroundColor: `${interpolateColor(myData.moisture / 100, [0, 1], ['rgba(255, 240, 144, 0.5)','rgba(255, 240, 144, 1)'])}` }} />
          </SliderWrapper>

          <LabelRow>
            <LabelText>건성</LabelText>
            <LabelText>진성</LabelText>
          </LabelRow>
          
          <ListCol>
            <ListRow>
              <ListItem>🌟</ListItem>
              <ListItem>피지 활동이 활발해 피부가 자연스러운 윤기를 띠고,{'\n'}보호막 역할을 할 수 있어요.</ListItem>
            </ListRow>
            <ListRow>
              <ListItem>🌟</ListItem>
              <ListItem>하지만 모공이 막히기 쉬워 트러블이 생길 가능성이{'\n'}있으니 관리가 필요해요!</ListItem>
            </ListRow>
          </ListCol>
        </Section>

        <Section>
          <SectionTitle>
            수분도: <Highlight style={{ color: 'rgba(121, 163, 255, 1)'}}>{myData.moisture}%</Highlight> 수분충분 타입
          </SectionTitle>
          <SliderWrapper>
            <GradientTrack colors={['rgba(203, 219, 255, 0.5)','rgba(203, 219, 255, 1)']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} />
            <StyledSlider
              value={myData.moisture / 100}
              minimumTrackTintColor="transparent" 
              maximumTrackTintColor="transparent" 
              thumbTintColor="transparent" 
              minimumValue={0}
              maximumValue={1}
              disabled
            />
            <ThumbMarker style={{ left: `${myData.moisture}%`, backgroundColor: `${interpolateColor(myData.moisture / 100, [0, 1], ['rgba(203, 219, 255, 0.5)','rgba(203, 219, 255, 1)'])}` }} />
          </SliderWrapper>

          <LabelRow>
            <LabelText>수분부족</LabelText>
            <LabelText>수분충분</LabelText>
          </LabelRow>
          
          <ListCol>
            <ListRow>
              <ListItem>🌟</ListItem>
              <ListItem>피부 속 수분이 가득해 촉촉함을 오래 유지할 수{'\n'}있어요.</ListItem>
            </ListRow>
            <ListRow>
              <ListItem>🌟</ListItem>
              <ListItem>건조할 걱정 없는 유연하고 탄력있는 피부에요!</ListItem>
            </ListRow>
          </ListCol>
        </Section>

        <Section>
          <SectionTitle>
            민감도: <Highlight style={{ color: 'rgba(255, 105, 235, 1)'}}>{myData.sensitivity}%</Highlight> 지성 타입
          </SectionTitle>
          <SliderWrapper>
            <GradientTrack colors={['rgba(255, 215, 249, 0.5)','rgba(255, 215, 249, 1)']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} />
            <StyledSlider
              value={myData.sensitivity / 100}
              minimumTrackTintColor="transparent" 
              maximumTrackTintColor="transparent" 
              thumbTintColor="transparent" 
              minimumValue={0}
              maximumValue={1}
              disabled
            />
            <ThumbMarker style={{ left: `${myData.sensitivity}%`, backgroundColor: `${interpolateColor(myData.moisture / 100, [0, 1], ['rgba(255, 215, 249, 0.5)','rgba(255, 215, 249, 1)'])}` }} />
          </SliderWrapper>

          <LabelRow>
            <LabelText>둔감형</LabelText>
            <LabelText>민감형</LabelText>
          </LabelRow>
          
          <ListCol>
            <ListRow>
              <ListItem>🌟</ListItem>
              <ListItem>외부 자극 (온도 변화, 미세먼지, 자외선 등)에 민감{'\n'}하게 반응하는 편이에요.</ListItem>
            </ListRow>
            <ListRow>
              <ListItem>🌟</ListItem>
              <ListItem>특정 화장품 성분에 의해 자극을 받을 수 있어요.</ListItem>
            </ListRow>
          </ListCol>
        </Section>

        <EffectSection>
          <EffectTitle>내 피부에 중요한 효과</EffectTitle>
          <EffectSubtitle>내 피부에 맞는 효과를 줄 수 있는 제품을{'\n'}선택해야 해요!</EffectSubtitle>
          <EffectGrid>
            {effectList.map((effect, index) => (
              <EffectItem key={index}>
                <EffectIcon source={effect.icon} active={effect.active}/>
                <EffectText active={effect.active}>{effect.label}</EffectText>
              </EffectItem>
            ))}
          </EffectGrid>
        </EffectSection>
        
      </DescriptionBox>
    </Container>
  );
};

export default SkinTypeDetail;

const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-horizontal: 10px;
  margin-bottom: 40px;
`;

const DescriptionBox = styled(LinearGradient)`
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  max-width: 302px;
  margin-horizontal: 11px;
  gap: 10px;
  padding-vertical: 16px;
  padding-horizontal: 25px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #081533;
  margin-bottom: 20px;
`;

const Section = styled.View`
  margin-bottom: 20px;
  flex-direction: col;
  align-items: flex-start;
`;

const SectionTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: rgba(8, 21, 51, 1);
`;

const Highlight = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;

const SliderWrapper = styled.View`
  width: 100%;
  position: relative;
  margin-top:8px;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  height: 15px;
  border-radius: 20px;
`;

const GradientTrack = styled(LinearGradient)`
  position: absolute;
  width: 100%;
  height: 15px;
  border-radius: 10px;
`;

const ThumbMarker = styled(Animated.View)`
  position: absolute;
  top: -2px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 3px solid white;
  shadow-color: #000000;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.25;
`;

const LabelRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top:-20px;
  margin-bottom: 20px;
`;

const LabelText = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: #818182;
`;

const EffectSection = styled.View`
  align-items: center;
  margin-top: 10px;
`;

const EffectTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #081533;
`;

const EffectSubtitle = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: #5D85EE;
  text-align: center;
  line-height: 18px;
  margin-vertical: 10px;
`;

const EffectGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
`;

const EffectItem = styled.View`
  width: 25%;
  align-items: center;
  margin-bottom: 10px;
`;

const EffectIcon = styled.Image<{active:boolean}>`
  width: 52px;
  height: 52px;
  padding:6px;
  background-color:${({active}) => (active ?'rgba(229, 237, 255, 1)': 'rgba(239, 239, 239, 1)')};
  margin-bottom: 5px;
  border-radius: 8px;
`;

const EffectText = styled.Text<{active:boolean}>`
  font-size: 10px;
  text-align: center;
  color: ${({active}) => (active ?'rgba(93, 133, 238, 1)': 'rgba(129, 129, 130, 1)')};;
`;

const ListCol = styled.View`
  flex-direction: col;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  max-width: 266px;
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