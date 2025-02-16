/** @jsxImportSource @emotion/react */
import styled from '@emotion/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@emotion/react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyDresser from './commons/my-dresser/MyDresser';
import MyCosmetics from './commons/my-cosmetics/MyCosmetics';

const { height } = Dimensions.get('window');
const HEADER_HEIGHT = -50; 

const HomeContainer: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'DRESSER' | 'COSMETICS'>('DRESSER');
  
  const theme = useTheme(); // 테마 값 가져오기
  console.log(theme);
  return (
      <GradientBackground
        colors={
          (selectedTab === 'DRESSER')
          ?['#E9F0FF','#CBDBFF',]
          :['#FFFFFF','#FFFFFF']
        }
        start={{ x: 0, y: 0 }} 
        end={{ x: 0.5, y: 0.5  }}   
      >
        <SafeContainer>
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
        </SafeContainer>

          {/* 🔹 탭 선택 */}
          <ContentContainer>
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
            {selectedTab === 'DRESSER' ? <MyDresser headerHeight={HEADER_HEIGHT} /> : <MyCosmetics />}        
          </ContentContainer>   
      </GradientBackground>
    
  );
};

const GradientBackground = styled(LinearGradient)`
  flex:1;
  justify-content: center;
  align-items: strech;
  width: 100%;
  height:100%;
`;

const SafeContainer = styled(SafeAreaView)`
  background-color: transparent;
  padding: 0px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 25px;
`;

const Logo = styled.Image`
  resize-mode: contain;
  width: 60px;
  height: 30px;
`;

const ContentContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: strech;
`;

const HeaderButtons = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const SkinTypeButton = styled.TouchableOpacity`
  background-color: transparent;
  padding: 3px 12px;
  border-radius: 32px;
  border-width: 1.5px;
  border-color: #818182;
`;

const SkinTypeText = styled.Text`
  font-size: 14px;
  color: #818182;
`;

const NotificationIcon = styled.Image`
  width: 25px;
  height: 25px;
`;

/* 🔹 탭 */
const Tabs = styled.View`
  flex-direction: row;
  align-items: flex-start;
  gap: 18px;
`;

const TabBox = styled.View`
  
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  padding-horizontal: 25px;
`;


const TabButton = styled.TouchableOpacity<{ active?: boolean }>`
  padding: 1px 1px;
  border-bottom-width: ${({ active }) => (active ? '1.5px' : '0px')};
  border-bottom-color: ${({ active }) => (active ? '#081533' : 'transparent')};
`;

const TabText = styled.Text<{ active?: boolean }>`
  font-size: 18px;
  line-height: 18px;
  font-weight: ${({ active }) => (active ? '700' : '500')};
  color: ${({ active }) => (active ? '#081533' : '#818182')};
`;

/* 🔹 등록 버튼 */
const RegisterButton = styled.TouchableOpacity`
  background-color: #3A54AA;
  padding: 4px 16px;
  border-radius: 30px;
  align-self: center;
`;

const RegisterText = styled.Text`
  color: white;
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;
`;

export default HomeContainer;
