import React from 'react';
import styled from "styled-components";
import { getColor } from "../../../_starter/theme/theme";

const MdAdditionalInfoCard = styled.div `
  height: 226px;
  background: ${getColor('bgGrey')};
  border: 1px solid ${getColor('greyLightest')};
  box-sizing: border-box;
  margin: 0 0 10px 0;
`;
const LgAdditionalInfoCard = styled.div `
  height: 428px;
  background: ${getColor('bgGrey')};
  border: 1px solid ${getColor('greyLightest')};
  box-sizing: border-box;
  margin: 0 0 10px 0;
`;
const SmAdditionalInfoCard = styled.div `
  height: 215px;
  background: ${getColor('bgGrey')};
  border: 1px solid ${getColor('greyLightest')};
  box-sizing: border-box;
`;
const XsmAdditionalInfoCard = styled.div `
  height: 194px;
  background: ${getColor('bgGrey')};
  border: 1px solid ${getColor('greyLightest')};
  box-sizing: border-box;
  margin: 0 0 10px 0;
`;
const AditionalInfoContainer = styled.div`
  width: 25%;
  height: 100%;
  margin: 0 10px 10px 10px;
`;

function AdditionalInfo() {
  return (
    <AditionalInfoContainer>
      <MdAdditionalInfoCard></MdAdditionalInfoCard>
      <LgAdditionalInfoCard></LgAdditionalInfoCard>
      <XsmAdditionalInfoCard></XsmAdditionalInfoCard>
      <SmAdditionalInfoCard></SmAdditionalInfoCard>
    </AditionalInfoContainer>
  );

}

export default AdditionalInfo;