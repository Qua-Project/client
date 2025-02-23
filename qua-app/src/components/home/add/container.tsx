import { useState } from "react";
import styled from "@emotion/native";
import BackButton from "../../commons/BackButton";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import {
  Image,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import ValueContainer from "./commons/ValueContainer";
import { RootParamList } from "@/src/types/type";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
const valueData = [
  {
    img: require("@assets/home/add/example01.png"),
    brand: "라운드랩",
    name: "소나무 진정",
    type: "토너",
  },
  {
    img: require("@assets/home/add/example02.png"),
    brand: "라운드랩",
    name: "소나무 수분",
    type: "앰플",
  },
  {
    img: require("@assets/home/add/example03.png"),
    brand: "라운드랩",
    name: "소나무 토너",
    type: "토너",
  },
];

export default function AddContainer() {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList, 'Add'>>(); 
  const [inputValue, setInputValue] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [addedItems, setAddedItems] = useState<any[]>([]); // plus 버튼 누른 아이템들

  const handleSearch = () => {
    if (inputValue.trim() === "") return;

    // 최근 검색어 업데이트
    setRecentSearches((prev) => [
      inputValue,
      ...prev.filter((item) => item !== inputValue),
    ]);

    // 검색 결과 필터링 (이름에 검색어 포함 여부로 필터)
    const filteredResults = valueData.filter((item) =>
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container>
        <BackButton />
        <TitleContainer>
          <Title>내 화장품 등록하기</Title>
          <SubTitle>나의 스킨케어 루틴을 등록해 보세요!</SubTitle>
          <SearchContainer>
            <Search
              placeholder="어떤 기초제품을 사용하시나요?"
              value={inputValue}
              onChangeText={(text) => {
                setInputValue(text);
                setShowResults(false); // 입력할 때 검색 결과 숨김
              }}
              onSubmitEditing={handleSearch}
            />
            <SearchBtn onPress={handleSearch}>
              <SearchIcon name="search" size={24} color="#818182" />
            </SearchBtn>
          </SearchContainer>
        </TitleContainer>

        {showResults ? (
          <ValueContainer searchResult={searchResult} onAdd={handleAddItem} />
        ) : inputValue === "" ? (
          <ImgContainer>
            <CountText>
              내 화장품 <CountNumber>{addedItems.length}</CountNumber>
            </CountText>
            {addedItems.map((item, index) => (
              <AddedCard key={index}>
                <CardImage source={item.img} />
                <TextContainer>
                  <ProductBrand>{item.brand}</ProductBrand>
                  <ProductName>{item.name}</ProductName>
                  <ProductType>{item.type}</ProductType>
                </TextContainer>
                <CloseButton onPress={() => handleRemoveItem(index)}>
                  <Image
                    source={require("@assets/home/add/close.png")}
                    style={{ width: 14, height: 14 }}
                  />
                </CloseButton>
              </AddedCard>
            ))}
          </ImgContainer>
        ) : (
          <RecentContainer>
            <RecentTitle>최근 검색어</RecentTitle>
            <RecentBtnContainer>
              {recentSearches.map((item, index) => (
                <RecentButton key={index} onPress={() => setInputValue(item)}>
                  <RecentText>{item}</RecentText>
                </RecentButton>
              ))}
            </RecentBtnContainer>
          </RecentContainer>
        )}
      </Container>
    </TouchableWithoutFeedback>
  );
}

const Container = styled.View`
  background-color: white;
  flex: 1;
  padding-top: 50px;
`;

const TitleContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-family: "pretendard";
  font-size: 24px;
  font-weight: 600;
  margin: 7px;
`;

const SubTitle = styled.Text`
  font-family: "pretendard";
  font-size: 14px;
  color: #5d85ee;
`;

const SearchContainer = styled.View`
  position: relative;
  width: 302px;
  height: 39px;
  margin: 30px;
  display: flex;
  align-items: center;
`;

const Search = styled.TextInput`
  font-family: "pretendard";
  border: 1px solid #818182;
  border-radius: 25px;
  width: 100%;
  height: 100%;
  padding: 0 40px 0 10px;
  font-size: 14px;
  color: #818182;
`;

const SearchBtn = styled.Pressable`
  position: absolute;
  right: 10px;
  top: 10px;
`;

const SearchIcon = styled(EvilIcons)``;

const ImgContainer = styled.View`
  margin: 20px;
  width: calc(100% - 40px);
  min-height: 294px;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  background-color: #e5edff;
`;

const CountText = styled.Text`
  font-family: "pretendard";
  align-self: flex-start;
  margin-bottom: 10px;
  font-size: 16px;
`;

const CountNumber = styled.Text`
  color: #5d85ee; /* 숫자만 파란색 */
`;

const AddedCard = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px;
  margin: 5px 0;
  border-radius: 10px;
  background-color: white;
  height: 105px;
  width: 100%;
`;

const CardImage = styled.Image`
  width: 77px;
  height: 77px;
  border-radius: 10px;
  margin-right: 10px;
`;

const TextContainer = styled.View`
  flex-direction: column;
  width: 60%;
`;

const CloseButton = styled.Pressable`
  padding: 10px;
  margin-bottom: 40px;
`;

const ProductBrand = styled.Text`
  font-family: "pretendard";
  font-size: 12px;
  color: #818182;
`;

const ProductName = styled.Text`
  font-family: "pretendard";
  font-size: 14px;
  font-weight: bold;
  margin: 5px 0;
`;

const ProductType = styled.Text`
  font-family: "pretendard";
  font-size: 12px;
  background-color: #3a54aa;
  color: white;
  text-align: center;
  border-radius: 20px;
  width: 35px;
  padding: 3px;
`;

const RecentContainer = styled.View`
  padding: 20px;
`;

const RecentTitle = styled.Text`
  font-family: "pretendard";
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const RecentBtnContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const RecentButton = styled.Pressable`
  padding: 10px;
  margin: 3px;
  border: 1px solid #aaaaab;
  border-radius: 30px;
`;

const RecentText = styled.Text`
  font-family: "pretendard";
  font-size: 14px;
  color: #aaaaab;
`;
