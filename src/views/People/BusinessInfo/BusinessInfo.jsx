import React from 'react';
import styled from "styled-components";
import { getColor } from "../../../_starter/theme/theme";
import { default as CloudIcon } from "../../../_starter/shared/Icons/Cloud";
import { default as LinkedInIcon } from "../../../_starter/shared/Icons/LinkedIn";
import { default as TwitterIcon } from "../../../_starter/shared/Icons/Twitter";
import { default as LinkIcon } from "../../../_starter/shared/Icons/Link";


const BussinessCard = styled.div`
  height: 166px;
  background: ${getColor('white')};
  border: 1px solid ${getColor('greyLightest')};
  box-sizing: border-box;
  border-radius: 0px;
  margin: 0 0 10px 0;
`;
const MdBussinesCard =  styled.div `
  height: 238px;
  background: ${getColor('bgGrey')};
  border: 1px solid ${getColor('greyLightest')};
  box-sizing: border-box;
  margin: 0 0 10px 0;
`;
const SmBussinesCard =  styled.div `
  height: 144px;
  background: ${getColor('bgGrey')};
  border: 1px solid ${getColor('greyLightest')};
  box-sizing: border-box;
  margin: 0 0 10px 0;
`;
const LgBussinesCard =  styled.div `
  height: 517px;
  background: ${getColor('bgGrey')};
  border: 1px solid ${getColor('greyLightest')};
  box-sizing: border-box;
`;
const BussinessCardHeader = styled.div`
  height: 32px;
  border-radius: 0px;
`;
const BusinessCardBody = styled.div`
  height: 134px;
  border-radius: 0px;
`;
const SocialIcons = styled.div `
  display: flex;
  height: 24px;
  .CloudIcon: {
    background: ${getColor('blueLight')};
  }
`;
const BusinessContainer = styled.div`
  height: 100%;
  width: 300px;
  margin: 0 10px 10px 10px;
`;

function BusinessInfo() {
  return (
    <BusinessContainer>
      <BussinessCard>
        <BussinessCardHeader>
          <span></span>
          <span></span>
        </BussinessCardHeader>
        <BusinessCardBody>
          <h1>Gary Glover</h1>
          <h3>Marketing Manager</h3>
          <a href="#">Facebook</a>
          <SocialIcons>
            <CloudIcon></CloudIcon>
            <LinkedInIcon></LinkedInIcon>
            <TwitterIcon></TwitterIcon>
            <LinkIcon></LinkIcon>
          </SocialIcons>
        </BusinessCardBody>
      </BussinessCard>
      <MdBussinesCard></MdBussinesCard>
      <SmBussinesCard></SmBussinesCard>
      <LgBussinesCard></LgBussinesCard>
    </BusinessContainer>
  );

}

export default BusinessInfo;