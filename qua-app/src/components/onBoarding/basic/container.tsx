import { useState, useRef } from "react";
import styled from "@emotion/native";
import {
  Text,
  Pressable,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  basic: undefined;
};

export default function BasicContainer() {
  const [gender, setGender] = useState<"남성" | "여성" | "">("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const monthRef = useRef<TextInput>(null);
  const dayRef = useRef<TextInput>(null);

  const isFormValid =
    gender !== "" &&
    year.length === 4 &&
    month.length === 2 &&
    day.length === 2;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container>
        <Title2>기본 정보를 입력해주세요</Title2>
        <Title3>성별</Title3>
        <GenderContainer>
          <GenderButton
            isSelected={gender === "여성"}
            onPress={() => setGender("여성")}
          >
            <GenderText isSelected={gender === "여성"}>여성</GenderText>
          </GenderButton>
          <GenderButton
            isSelected={gender === "남성"}
            onPress={() => setGender("남성")}
          >
            <GenderText isSelected={gender === "남성"}>남성</GenderText>
          </GenderButton>
        </GenderContainer>

        <Title3>생년월일</Title3>
        <BirthdateContainer>
          <BirthInput
            placeholder="YYYY"
            keyboardType="numeric"
            maxLength={4}
            value={year}
            onChangeText={(text) => {
              setYear(text);
              if (text.length === 4) monthRef.current?.focus();
            }}
          />
          <Divider></Divider>
          <BirthInput
            ref={monthRef}
            placeholder="MM"
            keyboardType="numeric"
            maxLength={2}
            value={month}
            onChangeText={(text) => {
              if (text.length <= 2) setMonth(text);
              if (text.length === 2) dayRef.current?.focus();
            }}
          />
          <Divider></Divider>
          <BirthInput
            ref={dayRef}
            placeholder="DD"
            keyboardType="numeric"
            maxLength={2}
            value={day}
            onChangeText={(text) => {
              if (text.length <= 2) setDay(text);
            }}
          />
        </BirthdateContainer>

        <NextButton
          disabled={!isFormValid}
          onPress={() => navigation.navigate("basic")}
          isActive={isFormValid}
        >
          <BtnText isActive={isFormValid}>다음</BtnText>
        </NextButton>
      </Container>
    </TouchableWithoutFeedback>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Title2 = styled.Text`
  margin-top: 120px;
  font-family: "pretendard";
  font-size: 24px;
  font-weight: 600;
  margin-left: 20px;
`;

const Title3 = styled.Text`
  font-family: "pretendard";
  color: #818182;
  margin-top: 40px;
  margin-left: 20px;
`;

const GenderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 20px;
`;

const GenderButton = styled(Pressable)<{ isSelected: boolean }>`
  width: 48%;
  height: 60px;
  border-radius: 10px;
  border: 2px solid ${({ isSelected }) => (isSelected ? "#79A3FF" : "#dbdbdb")};
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const GenderText = styled(Text)<{ isSelected: boolean }>`
  font-family: "pretendard";
  font-size: 14px;
  color: ${({ isSelected }) => (isSelected ? "#79A3FF" : "#818182")};
`;

const BirthdateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 20px;
`;

const BirthInput = styled(TextInput)`
  width: 30%;
  height: 44px;
  border-radius: 10px;
  border: 2px solid #dbdbdb;
  text-align: center;
  font-size: 14px;
  color: #818182;
  font-family: "pretendard";
`;

const Divider = styled.Text`
  font-size: 18px;
  margin: 0 5px;
  color: #818182;
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
