import React from "react";
import styled from "@emotion/native";

interface RateBarProps {
  label: string;
  percentage: number;
}

export const RateBar = ({ label, percentage }: RateBarProps) => {
  return (
    <RateContainer>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
      <BarContainer>
        <FilledBar percentage={percentage} />
      </BarContainer>
    </RateContainer>
  );
};

export const DetailRate = () => {
  return (
    <Container>
      <RateBar label="유분감" percentage={68} />
      <RateBar label="수분감" percentage={45} />
      <RateBar label="민감도" percentage={30} />
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
`;

const RateContainer = styled.View`
  margin-bottom: 8px;
`;

const Label = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grey};
  font-family: ${({ theme }) => theme.fonts.family.regular};
`;

const Percentage = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grey};
  font-family: ${({ theme }) => theme.fonts.family.regular};
  position: absolute;
  right: 0;
`;

const BarContainer = styled.View`
  width: 178px;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  margin-top: 2px;
  position: relative;
`;

const FilledBar = styled.View<{ percentage: number }>`
  width: ${({ percentage }) => `${(percentage * 1.78).toFixed(2)}px`};
  height: 100%;
  background-color: #79a3ff;
  border-radius: 4px;
  position: absolute;
  left: 0;
`;
