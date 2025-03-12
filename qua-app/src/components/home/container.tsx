/** @jsxImportSource @emotion/react */
import styled from '@emotion/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@emotion/react';
import { useState } from 'react';
import MyDresser from './commons/my-dresser/MyDresser';
import MyCosmetics from './commons/my-cosmetics/MyCosmetics';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootParamList } from '@/src/types/type';
import MainHeader from '../commons/MainHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HEADER_HEIGHT = -50; 

const HomeContainer: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList, 'Home'>>(); 
  const [selectedTab, setSelectedTab] = useState<'DRESSER' | 'COSMETICS'>('DRESSER');
  
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
        <MainHeader/>
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
            <RegisterButton onPress={()=>{navigation.push("Add")}}>
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

const ContentContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: strech;
`;

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
