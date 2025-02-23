import styled from '@emotion/native';
import SkinTypeDescription from './SkinTypeDesciption';
import SkinBalance from './SkinBalance';
import SkinTypeDetail from './SkinTypeDetail';
import { startStore } from '@/src/hooks/stores/start';

const SkinTypeDescriptionContainer:React.FC = () => {
  const {isStart, setStart} = startStore();
  return (
    <Container>
      <SkinTypeDescription/>
      <SkinBalance/>
      <SkinTypeDetail/>
      <ButtonContainer onPress={() => {setStart(!isStart)}}>
        <ButtonText>확인</ButtonText>
      </ButtonContainer>
    </Container>
  );
};

export default SkinTypeDescriptionContainer;

const Container = styled.View`
  flex-direction: col;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.TouchableOpacity`
  background-color: rgba(93, 133, 238, 1);
  width: 148px;
  height: 43px;
  border-radius: 20px;
  align-items: center;
  padding-vertical: 8px;
  padding-horizontal: 60px;
  justify-content: center;
  margin-bottom: 15px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
