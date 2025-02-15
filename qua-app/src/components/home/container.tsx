/** @jsxImportSource @emotion/react */
import styled from '@emotion/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@emotion/react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useState } from 'react';
import MyDresser from './commons/MyDresser';


const HomeContainer: React.FC = () => {
  const [activeStart, setActiveStart] = useState(false);
  const handleButtonClick = () => {
    setActiveStart(true);
  };
  const [selectedTab, setSelectedTab] = useState<'DRESSER' | 'COSMETICS'>('DRESSER');
  const MyCosmetics = () => (
    <ContentContainer>
      <Text>내 화장품 콘텐츠</Text>
    </ContentContainer>
  );
  const theme = useTheme(); // 테마 값 가져오기
  console.log(theme);
  return (
      <GradientBackground
        colors={[
          '#E9F0FF',
          '#CBDBFF',
        ]}
        start={{ x: 0.5, y: 0 }} 
        end={{ x: 0.5, y: 1  }}   
      >
        {/* 🔹 헤더 */}
        <Header>
          <Logo source={require('@assets/Qua.png')} />
          <HeaderButtons>
            <SkinTypeButton>
              <SkinTypeText>피부 타입</SkinTypeText>
            </SkinTypeButton>
            <NotificationIcon source={require('@assets/notification_icon.png')} />
          </HeaderButtons>
        </Header>

        {/* 🔹 탭 선택 */}
        <TabBox>
          <Tabs>
            <TabButton active={selectedTab === 'DRESSER'} onPress={() => setSelectedTab('DRESSER')}>
              <TabText  active={selectedTab === 'DRESSER'}>내 화장대</TabText>
            </TabButton>
            <TabButton active={selectedTab === 'COSMETICS'} onPress={() => setSelectedTab('COSMETICS')}>
              <TabText active={selectedTab === 'COSMETICS'}>내 화장품</TabText>
            </TabButton>
          </Tabs>
          <RegisterButton>
            <RegisterText>등록하기</RegisterText>
          </RegisterButton>
        </TabBox>
        {selectedTab === 'DRESSER' ? <MyDresser /> : <MyCosmetics />}        
      </GradientBackground>
    
  );
};

const GradientBackground = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
  align-items: strech;
  width: 100%;
  height:100%;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Logo = styled.Image`
  width: 50px;
  height: 20px;
`;
const ContentContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const HeaderButtons = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SkinTypeButton = styled.TouchableOpacity`
  background-color: #f0f0f5;
  padding: 5px 10px;
  border-radius: 20px;
  margin-right: 10px;
`;

const SkinTypeText = styled.Text`
  font-size: 12px;
  color: #666;
`;

const NotificationIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

/* 🔹 탭 */
const Tabs = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
`;

const TabBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;


const TabButton = styled.TouchableOpacity<{ active?: boolean }>`
  padding: 10px 15px;
  border-bottom-width: ${({ active }) => (active ? '2px' : '0px')};
  border-bottom-color: ${({ active }) => (active ? '#081533' : 'transparent')};
`;

const TabText = styled.Text<{ active?: boolean }>`
  font-size: 14px;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  color: ${({ active }) => (active ? '#081533' : '#666')};
`;

/* 🔹 중앙 이미지 */
const MainImage = styled.Image`
  width: 100%;
  resize-mode: cover;
  margin-top: 10px;
`;

/* 🔹 등록 버튼 */
const RegisterButton = styled.TouchableOpacity`
  background-color: #658ef4;
  padding: 10px 15px;
  border-radius: 20px;
  align-self: center;
  margin-top: -20px;
`;

const RegisterText = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: bold;
`;

export default HomeContainer;
