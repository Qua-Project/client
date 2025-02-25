/** @jsxImportSource @emotion/react */
import styled from '@emotion/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootParamList } from '@/src/types/type';
import MainHeader from '../commons/MainHeader';
import SearchBar from './commons/SearchBar';
import { FlatList } from 'react-native';
import RankingList from './commons/RankingList';
import RecommendedPick from './commons/RecommendedPick';
import TopDresserPick from './commons/TopDresserPick';

const SearchContainer: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList, 'Search'>>(); 
  const handleSearchBar = () => {
    navigation.push("SearchProduct");
  }
  const handleFullRanking = () => {
    navigation.push("Ranking");
  }

  const sectionData = [
    { id: 'ranking', content: <RankingList handleFull={handleFullRanking}/>}, 
    { id: 'pick', content: <RecommendedPick />}, 
    { id: 'topDresser', content: <TopDresserPick />}
  ];

  return (
    <GradientBackground
      colors={
        ['#E9F0FF','#CBDBFF',]
      }
      start={{ x: 0, y: 0 }} 
      end={{ x: 0.5, y: 0.5  }}   
    >
      <FlatList
        ListHeaderComponent={
          <>
            <MainHeader/>
            <SearchBar handleSearch={handleSearchBar}/>
          </>
        } 
        data={sectionData} // ✅ 섹션을 리스트로 관리
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return(item.content);
        }}
        showsVerticalScrollIndicator={false}
      />
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
export default SearchContainer;
