import styled from "@emotion/native";
import SkinCircularChart from "./SkinCircularChart";
import ProgressBar from "./ProgressBar";

interface SkinDataProps{
  total: number;
  oil: number; 
  moisture: number;
  sensitivity: number;
}

const SkinDataContainer: React.FC<SkinDataProps> = ({total, oil, moisture, sensitivity}) => {
  return (
    <SkinDataContent>
      <SkinScoreChart>
        <SkinScoreDescription source={require('@assets/home/skin_score_discription.png')}/>
        <SkinCircularChart
          percentage={total}
        ></SkinCircularChart>
      </SkinScoreChart>
      <SkinDetailContent>
        <SkinDataRow>
          <SkinDataLabel>유분감</SkinDataLabel>
          <SkinDataLabel>{oil}%</SkinDataLabel>
        </SkinDataRow>
        <ProgressBar progress={oil/100} />
        <SkinDataRow>
          <SkinDataLabel>수분감</SkinDataLabel>
          <SkinDataLabel>{moisture}%</SkinDataLabel>
        </SkinDataRow>
        <ProgressBar progress={moisture/100}/>
        <SkinDataRow>
          <SkinDataLabel>민감도</SkinDataLabel>
          <SkinDataLabel>{sensitivity}%</SkinDataLabel>
        </SkinDataRow>
        <ProgressBar progress={sensitivity/100} />
      </SkinDetailContent>
    </SkinDataContent>
  );
};

export default SkinDataContainer;


/* 🔹 피부 데이터 */
const SkinDataContent = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
`;

const SkinScoreChart = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
`;

const SkinScoreDescription = styled.Image`
  resize-mode: contain;
  position: absolute;
  top:0;
  right: 0;
  align-self: center;
`;

const SkinDetailContent = styled.View`
  flex-direction: col;
  width: 208px;
  gap: 4px;
`;

const SkinDataRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: -2px;
`;

const SkinDataLabel = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #818182;
  line-height: 21px;
`;
