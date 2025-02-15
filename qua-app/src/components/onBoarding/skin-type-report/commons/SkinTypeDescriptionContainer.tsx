import styled from '@emotion/native';
import SkinTypeDescription from './SkinTypeDesciption';
import SkinBalance from './SkinBalance';
import SkinTypeDetail from './SkinTypeDetail';

const SkinTypeDescriptionContainer = () => {
  
  return (
    <Container>
      <SkinTypeDescription/>
      <SkinBalance/>
      <SkinTypeDetail/>
    </Container>
  );
};

export default SkinTypeDescriptionContainer;

const Container = styled.View`
  flex-direction: col;
  align-items: center;
  justify-content: center;
`;