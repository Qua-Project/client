import React, { ReactNode } from "react";
import styled from "@emotion/native";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";

interface ScrollContainerProps {
  children: ReactNode;
}

export default function ScrollContainer({ children }: ScrollContainerProps) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <StyledScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          {children}
        </StyledScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const StyledScrollView = styled(ScrollView)`
  flex: 1;
  padding-top: 56px;
  background-color: white;
`;
