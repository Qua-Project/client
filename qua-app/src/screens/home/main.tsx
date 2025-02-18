import React from "react";
import styled from "@emotion/native";
import { Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  add: undefined;
};

export default function MainScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <Container>
      <Title>Home Main</Title>
      <Pressable
        onPress={() => {
          navigation.navigate("add");
        }}
      >
        <Text>등록하기</Text>
      </Pressable>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 50px;
`;

const Title = styled.Text``;
