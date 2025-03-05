import styled from "@emotion/native";
import { useNavigation } from "@react-navigation/native";

import Ionicons from "@expo/vector-icons/Ionicons";

const BackButton:React.FC=()=> {
  const navigation = useNavigation();

  return (
    <Btn onPress={() => navigation.goBack()}>
      <Ionicons name="chevron-back" size={29} color="black" />
    </Btn>
  );
}
export default BackButton;
const Btn = styled.Pressable`
  margin-left: 20px;
  margin-top: 10px;
`;
