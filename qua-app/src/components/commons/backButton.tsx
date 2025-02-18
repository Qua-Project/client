import styled from "@emotion/native";
import { useNavigation } from "@react-navigation/native";

import Ionicons from "@expo/vector-icons/Ionicons";

export default function BackButton() {
  const navigation = useNavigation();

  return (
    <Btn onPress={() => navigation.goBack()}>
      <Ionicons name="chevron-back" size={29} color="black" />
    </Btn>
  );
}

const Btn = styled.Pressable`
  margin-left: 5px;
`;
