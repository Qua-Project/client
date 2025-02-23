import styled from "@emotion/native";

const SolutionContainer:React.FC=() => {
  return (
    <Container>
      <Solution>솔루션</Solution>
      <SolutionDetailContatiner>
        <SolutionImage source={require('@assets/home/skin_data_solution.png')}/>
        <SolutionDetailText>
          내 피부엔 <SolutionDetailHighlightText>보습, 진정, 피지 조절 </SolutionDetailHighlightText>성분이 중요해요
        </SolutionDetailText>
      </SolutionDetailContatiner>
      <SolutionDetailContatiner>
        <SolutionImage source={require('@assets/home/skin_data_solution.png')}/>
        <SolutionDetailText>
          내 화장품에는 <SolutionDetailHighlightText>보습 성분</SolutionDetailHighlightText>이 부족해요
        </SolutionDetailText>
      </SolutionDetailContatiner>
      <SolutionDetailContatiner>
        <SolutionImage source={require('@assets/home/skin_data_solution.png')}/>
        <SolutionDetailText>
          보습 케어 루틴을 추가해보세요
        </SolutionDetailText>
      </SolutionDetailContatiner>
    </Container>
  );
};

export default SolutionContainer;


/* 🔹 피부 데이터 */
const Container = styled.View`
  flex: 1;
  flex-direction: col;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  background-color: #F7F7F7;
  border-radius: 20px;
  padding-vertical: 16px;
  padding-horizontal: 32px;
  gap:8px;
  margin-bottom: 24px;
`;

const Solution = styled.Text`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  color: #081533;
  margin-bottom: 4px;
`
const SolutionDetailContatiner = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
`
const SolutionImage = styled.Image`
  width: 18px;
  height: 18px;
  re-size: contain;
`
const SolutionDetailText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  color: #081533;
`
const SolutionDetailHighlightText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  color: #5D85EE;
`