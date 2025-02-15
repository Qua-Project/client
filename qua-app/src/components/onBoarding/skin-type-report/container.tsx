/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import styled from '@emotion/native';
import { LinearGradient } from 'expo-linear-gradient';
import SkinTypeDescriptionContainer from './commons/SkinTypeDescriptionContainer';
import { Dimensions, Text, FlatList } from 'react-native';

enum TabType {
  DESCRIPTION = '피부 타입 설명',
  SKIN_CARE = '스킨 케어 팁',
}

const SkinTypeResultcContainer: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>(TabType.DESCRIPTION);
  const { width, height } = Dimensions.get('window');

  const SkinCareTips = () => (
    <ContentContainer>
      <Text>여기에 스킨 케어 팁 내용이 들어갑니다.</Text>
    </ContentContainer>
  );

  const sections = [
    {id: 'title', content:
      <Title>피부타입 분석 리포트</Title>
    },
    {id: 'content', content:
      <TypeContainer
        colors={[
          'rgba(255, 255, 255, 0.66)',
          'rgba(255, 255, 255, 0.34)',
        ]}
        start={{ x: 0.5, y: 0 }} 
        end={{ x: 0.5, y: 0.4  }}  
      >
        <TabContainer>
          <TabButton
            selected={selectedTab === TabType.DESCRIPTION}
            onPress={() => setSelectedTab(TabType.DESCRIPTION)}
          >
            <TabText selected={selectedTab === TabType.DESCRIPTION}>
              {TabType.DESCRIPTION}
            </TabText>
          </TabButton>
          <TabButton
            selected={selectedTab === TabType.SKIN_CARE}
            onPress={() => setSelectedTab(TabType.SKIN_CARE)}
          >
            <TabText selected={selectedTab === TabType.SKIN_CARE}>
              {TabType.SKIN_CARE}
            </TabText>
          </TabButton>
        </TabContainer>
        {selectedTab === TabType.DESCRIPTION ? <SkinTypeDescriptionContainer /> : <SkinCareTips />}
      </TypeContainer>
    }
  ]


  return (
      <GradientBackground
        colors={[
          'rgba(233, 240, 255, 1)',
          'rgba(203, 219, 255, 1)',
        ]}
        start={{ x: 0, y: 0 }} 
        end={{ x: 0.55, y: 0.55  }}   
      >
        <FlatList
          data={sections}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Container>{item.content}</Container>}
          horizontal={false} 
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          contentContainerStyle={{ flexGrow: 1, width: width*0.9, paddingBottom:70}}
        />
      </GradientBackground>
    
  );
};

const GradientBackground = styled(LinearGradient)`
  flex: 1;
  align-items: center;
  padding: 14px;
`;
const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const TypeContainer = styled(LinearGradient)`
  border-radius: 20px;
  border: 1px;
  border-color: rgba(255, 255, 255, 1);
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  min-width: 344px;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #081533;
  margin-top: 130px;
  margin-bottom: 20px;
`;

const TabContainer = styled.View`
  flex-direction: row;
  background-color: transparent;
  border-radius-top-left: 10px;
  border-radius-top-right: 10px;
  border-bottom-width: 1px;
  align-items: center;
  border-color: rgba(255, 255, 255, 1);
  width:100%;
  min-height: 70px;
  padding-left: 10px;
`;

const TabButton = styled.TouchableOpacity<{ selected: boolean }>`
  flex: 1;
  max-width: 107px;
  min-height: 32px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-right: 1px;
  background-color: ${({ selected }) => (selected ? '#5D85EE' : 'transparent')};
`;

const TabText = styled.Text<{ selected: boolean }>`
  font-size: 16px;
  font-weight: ${({ selected }) => (selected ? 'bold' : 'regular')};
  color: ${({ selected }) => (selected ? '#ffffff' : '#989898')};
`;

const ContentContainer = styled.View`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 350px;
`;

export default SkinTypeResultcContainer;
