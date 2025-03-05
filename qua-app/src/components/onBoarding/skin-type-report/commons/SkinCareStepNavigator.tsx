import React, { useState } from 'react';
import styled from '@emotion/native';
import SkinCareTip from './SkinCareTip';
import { TipType } from '../utils/constants';

interface SkinCareStepNavigatorProps {
  steps: { 
    label: string; 
    activeIcon: any; 
    inactiveIcon: any;
    careTips: {title: string, description: string}[];
    cautionTips: {title: string, description: string}[];
  }[];
}

const SkinCareStepNavigator: React.FC<SkinCareStepNavigatorProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  
  return (
    <Container>
      <ProgressBarWrapper>
        <ProgressLine />
        <DotContainer>
          {steps.map((_, index) => (
            <Dot key={index} active={index === currentStep} />
          ))}
        </DotContainer>
      </ProgressBarWrapper>

      <StepContainer>
        {steps.map((step, index) => (
          <StepButton key={index} onPress={() => setCurrentStep(index)} >
            <StepIcon source={index === currentStep ? step.activeIcon : step.inactiveIcon} active={index === currentStep}/>
            <StepLabel active={index === currentStep}>{step.label}</StepLabel>
          </StepButton>
        ))}
      </StepContainer>
      <ContentSection>
        <ContentTitle>이렇게 관리하세요!</ContentTitle>
        <ContentContainer>
          {steps[currentStep].careTips.map((tip, index) => (
            <SkinCareTip key={index} index={index} tip={tip} type={TipType.CARE_TIP}/>
          ))}
        </ContentContainer>
        

        <ContentTitle>이런 건 조심하세요!</ContentTitle>
        <ContentContainer>
          {steps[currentStep].cautionTips.map((tip, index) => (
            <SkinCareTip key={index} index={index} tip={tip} type={TipType.CAUTION_TIP}/>
          ))}
        </ContentContainer>
      </ContentSection>
    </Container>
  );
};

export default SkinCareStepNavigator;
const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

const ProgressBarWrapper = styled.View`
  position: relative;
  align-items: baseline;
  margin-bottom: 10px;
  flex-direction: col; 
  margin-horizontal: 52px;
`;

const ProgressLine = styled.View`
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: rgba(170, 170, 171, 1);
  top: 2.5px;
`;

const DotContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center; 
`;

const Dot = styled.View<{ active: boolean }>`
  width: 7px;
  height: 7px;
  border-radius: 4px;
  background-color: ${({ active }) => (active ? '#79A3FF' : '#AAAAAB')};
  z-index: 1;
  align-self: center; 
`;



const StepContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
`;

const StepButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const StepIcon = styled.Image<{ active: boolean }>`
  background-color: ${({ active }) => (active ? '#CBDBFF' : '#DBDBDB')};
  width: 64px;
  height: 62.4px;
  padding: 9px;
  align-items:center;
  border-radius: 9.6px;
  justify-content: center;
`;

const StepLabel = styled.Text<{ active: boolean }>`
  font-size: 12px;
  margin-top: 5px;
  color: ${({ active }) => (active ? '#5D85EE' : '#818182')};
  font-weight: 500;
`;

const ContentSection = styled.View`
  width: 100%;  
  margin-top: 20px;
  padding-horizontal: 40px;
  gap: 20px;
`;

const ContentContainer = styled.View`
  align-items:flex-start;
  justify-content: flex-start;
  gap: 20px;
  margin-bottom: 28px;
`
const ContentTitle = styled.Text`
  font-size: 24px;
  color: #081533;
  font-weight: bold;
`;
