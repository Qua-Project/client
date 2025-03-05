import styled from "@emotion/native";
import React, { useState } from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";

interface SearchBarProps{
  handleSearch: () => void;
}
const SearchBar:React.FC<SearchBarProps> = ({handleSearch}) => {
  return(
    <SearchContainer>
      <Search
        onPress={handleSearch}
        placeholder="적합도를 확인하세요!"
        placeholderTextColor="#818182"
      />
      <SearchBtn onPress={handleSearch}>
        <SearchIcon name="search" size={24} color="#818182" />
      </SearchBtn>
    </SearchContainer>
  );
};

export default SearchBar;

const SearchContainer = styled.TouchableOpacity`
  position: relative;
  height: 39px;
  margin-horizontal: 30px;
  align-items: center;
  border: 0.5px solid #818182;
  border-radius: 25px;
  background-color: white;
  margin-bottom: 30px;
`;

const Search = styled.TextInput`
  font-family: Pretendard;
  width: 100%;
  height: 100%;
  padding-left: 20px;
  font-size: 14px;
  font-weight: 400;
  color: #081533;
`;

const SearchBtn = styled.Pressable`
  position: absolute;
  right: 10px;
  top: 10px;
`;

const SearchIcon = styled(EvilIcons)``;