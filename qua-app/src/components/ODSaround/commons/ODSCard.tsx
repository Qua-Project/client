import { Profile } from "../ODSCardCommons/Profile";
import styled from "@emotion/native";
import { TotalRate } from "../ODSCardCommons/TotalRate";
import { DetailRate } from "../ODSCardCommons/DetailRate";

export const ODSCard = () => {
  return (
    <ODSCardWrapper>
      <Profile />
      <BannerImage
        source={require("../../../../assets/around/ODS_banner.png")}
      />
      <RateWrapper>
        <TotalRateWrapper>
          <TotalRate />
        </TotalRateWrapper>
        <DetailRateWrapper>
          <DetailRate />
        </DetailRateWrapper>
      </RateWrapper>
    </ODSCardWrapper>
  );
};

const ODSCardWrapper = styled.View`
  width: 308px;
  height: 270px;
  margin-top: 40px;
  margin-left: 18px;
  background-color: ${({ theme }) => theme.colors.light_grey};
  border-radius: 10px;
  padding: 14px;
`;

const BannerImage = styled.Image`
  width: 100%;
  height: 90px;
  border-radius: 5px;
  margin-top: 14px;
  margin-bottom: 14px;
`;

const RateWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TotalRateWrapper = styled.View`
  width: 80px;
  height: 80px;
  margin-right: 16px;
`;

const DetailRateWrapper = styled.View`
  width: 178px;
  height: 94px;
`;
