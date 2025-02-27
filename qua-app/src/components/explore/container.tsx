import React from "react";
import styled from "@emotion/native";
import { Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamList } from "@/src/types/type";

const ExploreContainer: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList, 'Explore'>>(); 

  return (
    <Container>
      <Title>Explore Main</Title>
    </Container>
  );
}

export default ExploreContainer;

const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 50px;
`;

const Title = styled.Text``;
