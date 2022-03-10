import React from 'react';
import SocialData from "./SocialData";
import Role from "./Role";
import styled from "styled-components";
import { getColor } from "../../../../theme/theme";
import { default as StarOutlinedIcon } from "../../../../shared/Icons/StarOutlined";
import { default as EllipsisHorizontalIcon } from "../../../../shared/Icons/EllipsisHorizontal";

const BussinessCardHeader = styled.div`
  display: flex;
  height: 32px;
  border-radius: 0px;
  border: 1px solid ${getColor('greyLightest')};
  justify-content: space-between;
`;
const BusinessCardBody = styled.div`
  height: 134px;
  border-radius: 0px;
  text-align: center;
  border-top: 0;
  border: 1px solid ${getColor('greyLightest')};
`;
const StarContainer = styled.div`
  margin: 5px;
  color: ${getColor('orange')};
`;
const ShowMoreIcon = styled.div`
  margin: 5px;
  color: ${getColor('greyDarkest')};
`;


function SummaryBusiness({businessInfo}) {
  return (
    <>
      <BussinessCardHeader>
        <StarContainer>
          <StarOutlinedIcon />
        </StarContainer>
        <ShowMoreIcon>
          <EllipsisHorizontalIcon />
        </ShowMoreIcon>
      </BussinessCardHeader>
      <BusinessCardBody>
        <Role businessInfo={businessInfo} />
        <SocialData businessInfo={businessInfo} />
      </BusinessCardBody>
    </>
  );
}
export default SummaryBusiness;