import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { getColor } from "../../../_starter/theme/theme";
import { default as CloudIcon } from "../../../_starter/shared/Icons/Cloud";
import { default as LinkedInIcon } from "../../../_starter/shared/Icons/LinkedIn";
import { default as TwitterIcon } from "../../../_starter/shared/Icons/Twitter";
import { default as LinkIcon } from "../../../_starter/shared/Icons/Link";
import { default as StarOutlinedIcon } from "../../../_starter/shared/Icons/StarOutlined";
import { default as EllipsisHorizontalIcon } from "../../../_starter/shared/Icons/EllipsisHorizontal";
import { PeopleAPI } from "../../../_starter/shared/API/PeopleAPI";


const BussinessCard = styled.div`
  height: 166px;
  background: ${getColor('white')};
  border: 1px solid ${getColor('greyLightest')};
  box-sizing: border-box;
  border-radius: 0px;
  margin: 0 0 10px 0;
`;
const MdBussinesCard = styled.div`
  height: 238px;
  background: ${getColor('bgGrey')};
  border: 1px solid ${getColor('greyLightest')};
  box-sizing: border-box;
  margin: 0 0 10px 0;
`;
const SmBussinesCard = styled.div`
  height: 144px;
  background: ${getColor('bgGrey')};
  border: 1px solid ${getColor('greyLightest')};
  box-sizing: border-box;
  margin: 0 0 10px 0;
`;
const LgBussinesCard = styled.div`
  height: 517px;
  background: ${getColor('bgGrey')};
  border: 1px solid ${getColor('greyLightest')};
  box-sizing: border-box;
`;
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
const RoleDetails = styled.div`
  position: relative;
  margin: 10px;
`;
const SocialIcons = styled.label`
  display: flex;
  height: 24px;
  justify-content: center;
  .CloudIcon: {
    background: ${getColor('blueLight')};
  }
`;
const StarContainer = styled.div`
  color: ${getColor('orange')};
`;
const LinkedInIconWrapper = styled.a`
  color: ${getColor('vendorLinkedInBlue')};
`;
const TwitterIconWrapper = styled.a`
  color: ${getColor('vendorTwitterBlue')};
`;
const CloudIconWrapper = styled.a`
  color: ${getColor('vendorCloudBlue')};
`;
const LinkIconWrapper = styled.a`
  color: ${getColor('greyDarkest')};
`;
const BusinessContainer = styled.div`
  height: 100%;
  width: 20%;
  margin: 0 10px 10px 10px;
`;

function BusinessInfo() {
  const [businessInfo, setBusinessInfo] = useState([]);
  const peopleAPI = PeopleAPI();

  const fetchPeopleData = async () => {
    peopleAPI.getPeopleData().then(activities => setBusinessInfo(activities));
  }

  useEffect(() => {
    fetchPeopleData();
  }, [])

  return (
    <BusinessContainer>
      <BussinessCard>
        <BussinessCardHeader>
          <StarContainer>
            <StarOutlinedIcon />
          </StarContainer>
          <EllipsisHorizontalIcon />
        </BussinessCardHeader>
        <BusinessCardBody>
          <RoleDetails>
            <label>{businessInfo.display_name}</label>
            <br/>
            <label>{businessInfo.title}</label>
            <br/>
            <a href={`https://www.facebook.com/${businessInfo.person_company_name}`}>Facebook</a>
          </RoleDetails>
          <SocialIcons>
            <CloudIconWrapper>
              <CloudIcon></CloudIcon>
            </CloudIconWrapper>
            <LinkedInIconWrapper href={businessInfo.linkedin_url} target='_blank' rel='noreferrer'>
              <LinkedInIcon></LinkedInIcon>
            </LinkedInIconWrapper>
            <TwitterIconWrapper href={`https://twitter.com/${businessInfo.twitter_handle}`} target='_blank' rel='noreferrer'>
              <TwitterIcon />
            </TwitterIconWrapper>
            <LinkIconWrapper href={businessInfo.personal_website} target='_blank' rel='noreferrer'>
              <LinkIcon></LinkIcon>
            </LinkIconWrapper>
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