import { useState } from "react";
import styled from "@emotion/native";
import BackButton from "../../commons/BackButton";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { FlatList, Image, Keyboard, TouchableWithoutFeedback,} from "react-native";
import { searchData } from "../search-product/utils/constants";
import { RootParamList } from "@/src/types/type";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import FullRankingList from "./commons/FullRankingList";

const RankingContainer:React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList, 'Ranking'>>(); 
  return (
    <Container>
      <BackButton/>
      <FullRankingList />
    </Container>
  );
}
export default RankingContainer;

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
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 700;
  margin: 7px;
`;

const SubTitle = styled.Text`
  font-family: Pretendard;
  font-size: 14px;
  fong-weight: 500;
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
  font-weight: 700;
  color: #081533;
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
