import { useState } from "react";
import styled from "@emotion/native";
import { Text, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootParamList } from "@/src/types/type";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function NicknameContainer() {
  const [nickname, setNickname] = useState("");
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList, 'Nickname'>>(); 

  const isNicknameValid = nickname.length > 0 && nickname.length <= 10;

  return (
    <Container>
      <Title>만나서 반가워요!</Title>
      <Title2>나만의 닉네임을 입력해주세요</Title2>
      <Title3>닉네임</Title3>
      <StyledInput value={nickname} onChangeText={setNickname} maxLength={10} />
      <Description>10자 이내로 작성해주세요.</Description>
      <NextButton
        disabled={!isNicknameValid}
        onPress={() => navigation.navigate("Basic")}
        isActive={isNicknameValid}
      >
        <BtnText isActive={isNicknameValid}>다음</BtnText>
      </NextButton>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Title = styled.Text`
  font-family: "pretendard";
  font-size: 18px;
  margin-top: 120px;
  margin-left: 20px;
`;

const Title2 = styled.Text`
  font-family: "pretendard";
  font-size: 24px;
  font-weight: 600;
  margin-top: 10px;
  margin-left: 20px;
`;

const Title3 = styled.Text`
  font-family: "pretendard";
  color: #818182;
  margin-top: 40px;
  margin-left: 20px;
`;

const StyledInput = styled(TextInput)`
  width: calc(100% - 40px);
  margin: 10px 20px;
  height: 44px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  padding: 0 10px;
`;

const Description = styled.Text`
  font-family: "pretendard";
  font-size: 14px;
  color: #818182;
  margin-left: 20px;
`;

const NextButton = styled(Pressable)<{ isActive: boolean }>`
  width: 90%;
  background-color: ${({ isActive }) => (isActive ? "#79A3FF" : "#dbdbdb")};
  height: 56px;
  margin: 20px;
  border-radius: 28px;
  position: absolute;
  bottom: 50px;
  align-items: center;
  justify-content: center;
`;

const BtnText = styled(Text)<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? "#fff" : "#aaaaab")};
  font-family: "pretendard";
  font-size: 16px;
  font-weight: bold;
`;
