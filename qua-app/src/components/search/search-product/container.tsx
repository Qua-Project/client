import { useState } from "react";
import styled from "@emotion/native";
import BackButton from "../../commons/BackButton";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { FlatList, Image, Keyboard, TouchableWithoutFeedback, StyleSheet} from "react-native";
import { searchData } from "./utils/constants";
import { RootParamList } from "@/src/types/type";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { populorData } from "./utils/constants";


const SearchProductContainer:React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList, 'SearchProduct'>>(); 
  const [inputValue, setInputValue] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>(["자작나무 수분크림", "독도 토너"]);
  const [searchResult, setSearchResult] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [addedItems, setAddedItems] = useState<any[]>([]); 

  const handleSearch = () => {
    if (inputValue.trim() === "") return;

    // 최근 검색어 업데이트
    setRecentSearches((prev) => [
      inputValue,
      ...prev.filter((item) => item !== inputValue),
    ]);

    // 검색 결과 필터링 (이름에 검색어 포함 여부로 필터)
    const filteredResults = searchData.filter((item) =>
      item.name.includes(inputValue)
    );
    setSearchResult(filteredResults);
    setShowResults(true);
  };

  // plus 버튼 누르면 해당 아이템을 등록
  const handleAddItem = (item: any) => {
    setAddedItems((prev) => [...prev, item]);
    setShowResults(false); // 등록 후 검색 결과 숨김
    setInputValue("");
  };

  // close 버튼 누르면 해당 아이템 삭제
  const handleRemoveItem = (indexToRemove: number) => {
    setAddedItems((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <Container>
      <HeaderContainer>
        <BackButton />
        <SearchContainer>
          <Search
            value={inputValue}
            onChangeText={(text) => {
              setInputValue(text);
              setShowResults(false); // 입력할 때 검색 결과 숨김
            }}
            autoFocus={true}
            selectionColor={"#818182"}
            onSubmitEditing={handleSearch}
          />
          <SearchBtn onPress={handleSearch}>
            <SearchIcon name="search" size={24} color="#818182" />
          </SearchBtn>
        </SearchContainer>
      </HeaderContainer>
      <RecentContainer>
        <Title>최근 검색</Title>
        <RecentBtnContainer>
          {recentSearches.map((item, index) => (
            <RecentButton key={index} onPress={() => setInputValue(item)}>
              <RecentText>{item}</RecentText>
            </RecentButton>
          ))}
        </RecentBtnContainer>
      </RecentContainer>
      <Title>인기 검색어</Title>
      
      <FlatList
        style={styles.flatContainer}
        data={populorData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PopularItemContainer>
            <PopularTextContainer>
              <RankText>{item.id}</RankText>
              <RankCosmeticText>{item.name}</RankCosmeticText>
            </PopularTextContainer>
            <PopularDivider/>
          </PopularItemContainer>
        )}
        showsVerticalScrollIndicator={false}
      />
      
    </Container>
    // </TouchableWithoutFeedback>
  );
}
export default SearchProductContainer;

const styles = StyleSheet.create({
  flatContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
});

const Container = styled.View`
  background-color: white;
  flex: 1;
  padding-top: 50px;
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
`

const SearchContainer = styled.View`
  position: relative;
  width: 302px;
  height: 39px;
  display: flex;
  margin-top: 15px;
  align-items: center;
`;

const Search = styled.TextInput`
  font-family: "pretendard";
  border: 1px solid #79A3FF;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  padding: 0 40px 0 20px;
  font-size: 18px;
  font-weight: 700;
  color: #081533;
`;

const SearchBtn = styled.Pressable`
  position: absolute;
  right: 10px;
  top: 10px;
`;

const SearchIcon = styled(EvilIcons)`
  color: #79A3FF;
`;

const RecentContainer = styled.View`
  margin-top: 43px;
  height: 114px;
`;

const Title = styled.Text`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
  padding-horizontal: 20px;
`;

const RecentBtnContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap:12px;
  flex-wrap: wrap;
  padding-horizontal: 20px;
`;

const RecentButton = styled.Pressable`
  height: 31px;
  padding: 4px 8px 4px 8px;
  margin-vertical: 3px;
  border: 1px solid #AAAAAB;
  border-radius: 30px;
  justify-content: center;

`;

const RecentText = styled.Text`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  color: #818182;
`;

const PopularItemContainer = styled.View`
  width: 100%;
  margin-top: 8px;
  gap: 4px;
`

const PopularDivider = styled.View`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.13);
`

const PopularTextContainer = styled.View`
  flex-direction: row;
  margin-left: 14px;
  gap: 16px;
  padding-vertical: 8px;
`

const RankText = styled.Text`
  width: 17px;
  font-size: 15px;
  font-weight: 400;
  font-family: Pretendard;
  text-align: left;
  color: #171717;
`
const RankCosmeticText = styled.Text`
  font-size: 15px;
  font-weight: 400;
  font-family: Pretendard;
  text-align: left;
  color: #171717;
`