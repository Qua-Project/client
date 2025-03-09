import styled from "@emotion/native";
import React from "react";
import { FlatList,Text } from "react-native";

interface HighLightedTextProps{
  query: string;
  text: string;
}
const HighLightedText: React.FC<HighLightedTextProps> = ({query, text}) => {
  const parts = text.split(new RegExp(`(${query})`, "gi"));

  return (
    <Text>
      {parts.map((part, index) => (
        <SearchText key={index} selected={part.toLowerCase() === query.toLowerCase()}>
          {part}
        </SearchText>
      ))}
    </Text>
  );
};

export default HighLightedText;

const SearchText = styled.Text<{ selected: boolean }>`
  color: ${({ selected }) => (selected ? '#5D85EE' : '#05060A')};
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
`