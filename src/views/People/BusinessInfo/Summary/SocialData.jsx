import React from 'react';
import styled from "styled-components";
import { getColor } from "../../../../_starter/theme/theme";
import { default as CloudIcon } from "../../../../_starter/shared/Icons/Cloud";
import { default as LinkedInIcon } from "../../../../_starter/shared/Icons/LinkedIn";
import { default as TwitterIcon } from "../../../../_starter/shared/Icons/Twitter";
import { default as LinkIcon } from "../../../../_starter/shared/Icons/Link";

const SocialIcons = styled.label`
  display: flex;
  height: 24px;
  justify-content: center;
`;
const LinkedInIconWrapper = styled.a`
  margin: 0px 5px;
  color: ${getColor('vendorLinkedInBlue')};
`;
const TwitterIconWrapper = styled.a`
  margin: 0px 5px;
  color: ${getColor('vendorTwitterBlue')};
`;
const CloudIconWrapper = styled.a`
  margin: 0px 5px;
  color: ${getColor('vendorCloudBlue')};
`;
const LinkIconWrapper = styled.a`
  margin: 0px 5px;
  color: ${getColor('greyDarkest')};
`;

function SocialData({businessInfo}) {
  return (
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
  );
}
export default SocialData;