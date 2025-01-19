import React from "react";
import styled from "@emotion/native";
import HomeScreen from "../../components/utils/home/util/container";

export default function MainScreen() {
  return HomeScreen();
}

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const Title = styled.Text``;
