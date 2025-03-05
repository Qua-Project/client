import styled from "@emotion/native";
import DresserPostionProgressBar from "./DresserPositionProgreeBar";
interface DresserPositionProps{
  total: number;
  oil: number; 
  moisture: number;
  sensitivity: number;
}

const DresserPosition:React.FC=() => {
  return (
    <Container>
      <Title>내 화장대 위치</Title>
      <Description>OMS 타입 화장대들의 점수를 상대적으로 비교한 결과입니다.</Description>
      <DresserPostionProgressBar score={25} />

      <LabelContainer>
        <LabelText>하위권</LabelText>
        <LabelText>상위권</LabelText>
      </LabelContainer>
    </Container>
  );
};

export default DresserPosition;

const Container = styled.View`
  flex-direction: col;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 15px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  color: #081533;
  margin-bottom: -3px;
`
const Description = styled.Text`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #818182;
`
const LabelContainer = styled.View`
  width:100%;
  flex-direction: row;
  justify-content: space-between;
`;

const LabelText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #081533;
`
