/** @jsxImportSource @emotion/react */
import styled from '@emotion/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@emotion/react';
import WaitingCard from './commons/WaitingCard';
import { useEffect, useState } from 'react';

interface SkinTypeResultContainerProps{
  skinType: string;
}

const SkinTypeResultContainer: React.FC<SkinTypeResultContainerProps> = ({skinType}) => {
  const theme = useTheme(); // 테마 값 가져오기
  const [isWaiting, setIsWaiting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsWaiting(false); // ✅ 3초 후 상태 변경
    }, 3000);

    return () => clearTimeout(timer); // ✅ 메모리 정리
  }, []);

  return (
    <>
    {isWaiting 
    ? <WaitingCard/> 
    :<GradientBackground
        colors={[
          'rgba(233, 240, 255, 1)',
          'rgba(203, 219, 255, 1)',
        ]}
        start={{ x: 0, y: 0 }} 
        end={{ x: 0.55, y: 0.55  }}   
      >
        <Col>
          <Title>피부타입은</Title>
          <TextRow>
            <SkinTypeText>{skinType}</SkinTypeText>
            <Title>입니다.</Title>
          </TextRow>
        </Col>
        
        <TypeContainer
          colors={[
            'rgba(255, 255, 255, 0.66)',
            'rgba(255, 255, 255, 0.34)',
          ]}
          start={{ x: 0.5, y: 0 }} 
          end={{ x: 0.5, y: 0.4  }}  
        >
          <SectionTitle>쿠아의 피부타입 유형</SectionTitle>
          <TypeBoxRow>
            <TypeBox>
              <TypeDescriptionText>지성</TypeDescriptionText>
              <TypeRow>
                <TypeCapText selected={skinType.includes('O')}>O</TypeCapText>
                <TypeText >ily</TypeText>
              </TypeRow>
            </TypeBox>
            {/* <Dash>—</Dash> */}
            <DashLine/>
            <TypeBox>
              <TypeDescriptionText>건성</TypeDescriptionText>
              <TypeRow>
                <TypeCapText selected={skinType.includes('A')}>A</TypeCapText>
                <TypeText >lipic</TypeText>
              </TypeRow>
            </TypeBox>
          </TypeBoxRow>
          <TypeBoxRow>
            <TypeBox>
              <TypeDescriptionText>수분부족</TypeDescriptionText>
              <TypeRow>
                <TypeCapText selected={skinType.includes('D')}>D</TypeCapText>
                <TypeText >ry</TypeText>
              </TypeRow>
            </TypeBox>
            {/* <Dash>—</Dash> */}
            <DashLine/>
            <TypeBox>
              <TypeDescriptionText>수분충분</TypeDescriptionText>
              <TypeRow>
                <TypeCapText selected={skinType.includes('M')}>M</TypeCapText>
                <TypeText >oist</TypeText>
              </TypeRow>
            </TypeBox>
          </TypeBoxRow>
          <TypeBoxRow>
            <TypeBox>
              <TypeDescriptionText>민감형</TypeDescriptionText>
              <TypeRow>
                <TypeCapText selected={skinType.includes('S')}>S</TypeCapText>
                <TypeText >ensitive</TypeText>
              </TypeRow>
            </TypeBox>
            {/* <Dash>—</Dash> */}
            <DashLine/>
            <TypeBox>
              <TypeDescriptionText>저항형</TypeDescriptionText>
              <TypeRow>
                <TypeCapText selected={skinType.includes('R')}>R</TypeCapText>
                <TypeText >esistant</TypeText>
              </TypeRow>
            </TypeBox>
          </TypeBoxRow>
        </TypeContainer>

        <Button onPress={() => console.log('리포트 보기')}>
          <ButtonText>피부타입 분석 리포트 보기</ButtonText>
        </Button>
        <ReTestButton onPress={() => console.log('다시 분석')}>
          <ReTestText>피부타입 분석 다시하기</ReTestText>
        </ReTestButton>
        
      </GradientBackground>
    } 
    </>

  );
};

const GradientBackground = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: #081533;
  font-family: 'Pretendard';
  font-weight: 450;
  margin-bottom: 5px;
`;

const SkinTypeText = styled.Text`
  font-size: 30px;
  font-weight: 700;
  color: #3A54AA;
  font-family: 'Pretendard';
  margin-right: 5px;
`;

const SubTitle = styled.Text`
  font-size: 20px;
  color: #081533;
  font-family: 'Pretendard';
`;

const TypeContainer = styled(LinearGradient)`
  padding: 15px;
  border-radius: 10px;
  border: 1px;
  border-color: rgba(255, 255, 255, 1);
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 350px;
  min-height: 304px;
  justify-content: space-between;
  align-items: center;
`;

const SectionTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 14px;
  color: #081533;
`;

const TextRow = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const TypeBoxRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const Col = styled.View`
  flex-direction: col;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const TypeBox = styled.View`
  flex: 1;
  flex-direction: col;
  align-items: center;
  justify-content: space-between;
`;

const TypeDescriptionText = styled.Text`
  font-size: 12px;
  color: rgba(129, 129, 130, 1);
  margin-bottom: 8px;
`
const TypeRow = styled.View`
  flex-direction: row;
  align-items: baseline;
`

const TypeCapText = styled.Text<{ selected?: boolean }>`
  font-size: 30px;
  font-weight: 700;
  color: ${({ selected }) => (selected ? '#5D85EE' : '#081533')};
`;

const TypeText = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: #081533;
`;

const Dash = styled.Text`
  font-size: 18px;
  color: #081533;
  margin-horizontal: 5px;
`;

const DashLine = styled.View`
  flex: 1;
  height: 2px;
  max-width: 25px;
  border-radius: 5px;
  margin-top: 20px;
  background-color: #081533;
`;

const Button = styled.TouchableOpacity`
  background-color: white;
  padding: 12px 20px;
  border-radius: 28px;
  margin-top: 30px;
  width: 80%;
  align-items: center;
  justify-content: space-between;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #081533;
`;

const ReTestButton = styled.TouchableOpacity`
  margin-top: 10px;
`;

const ReTestText = styled.Text`
  font-size: 12px;
  color: #818182;
`;


export default SkinTypeResultContainer;
