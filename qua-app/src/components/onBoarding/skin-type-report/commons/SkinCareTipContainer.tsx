import styled from '@emotion/native';
import SkincareStepNavigator from './SkinCareStepNavigator';
import { SKIN_CARE_STEP_TIPS } from '../utils/constants';
import { startStore } from '@/src/hooks/stores/start';

const SkinCareTipContainer = () => {
  const {isStart, setStart} = startStore();
  return (
    <Container>
      <SkincareStepNavigator steps={SKIN_CARE_STEP_TIPS} />
      <ButtonContainer onPress={(isStart) => {setStart(!isStart)}}>
        <ButtonText>확인</ButtonText>
      </ButtonContainer>
    </Container>
  );
};

export default SkinCareTipContainer;

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
