import React from "react";
import styled from "@emotion/native";
import { Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

// 네비게이션 스택 타입 정의
type RootStackParamList = {
  main: undefined;
  detail: { productId: string };
};

// 네비게이션 타입
type NavigationProps = StackNavigationProp<RootStackParamList, "main">;

export default function MainScreen() {
  const navigation = useNavigation<NavigationProps>();

  return (
    <Container>
      <Title>Explore Main</Title>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 50px;
`;

const Title = styled.Text``;
