import React from 'react';
import styled from "styled-components";
import { getColor } from "../../../_starter/theme/theme";
import { default as PhoneIcon } from "../../../_starter/shared/Icons/Phone";
import { default as VoicemailIcon } from "../../../_starter/shared/Icons/Voicemail";
import { default as PaperPlaneIcon } from "../../../_starter/shared/Icons/PaperPlane";
import { default as ReplyIcon } from "../../../_starter/shared/Icons/Reply";
import { default as RocketIcon } from "../../../_starter/shared/Icons/Rocket";
import { default as BadgeIcon } from "../../../_starter/shared/Icons/Badge";

const TealIconWrapper = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 10px;
  border-radius: 50%;
  border: 2px solid ${getColor('white')};
  background: ${getColor('tealLightest')}; 
`;
const IndigoIconWrapper = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 10px;
  border-radius: 50%;
  border: 2px solid ${getColor('white')};
  background: ${getColor('indigoLightest')}; 
`;
const BlueIconWrapper = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 10px;
  border-radius: 50%;
  border: 2px solid ${getColor('white')};
  background: ${getColor('blueLightest')}; 
`;

function ItemIcon({ type }) {
  switch (type) {
    case 'voicemail':
      return (
        <TealIconWrapper type={type}>
          <VoicemailIcon></VoicemailIcon>
        </TealIconWrapper>
      );
    case 'success':
      return (
        <IndigoIconWrapper type={type}>
          <BadgeIcon></BadgeIcon>
        </IndigoIconWrapper>
      );
    case 'call':
      return (
        <TealIconWrapper type={type}>
          <PhoneIcon></PhoneIcon>
        </TealIconWrapper>
      );
    case 'sent_email':
      return (
        <IndigoIconWrapper type={type}>
          <PaperPlaneIcon></PaperPlaneIcon>
        </IndigoIconWrapper>
      );
    case 'email_reply':
      return (
        <IndigoIconWrapper type={type}>
          <ReplyIcon></ReplyIcon>
        </IndigoIconWrapper>
      );
    default:
      return (
        <BlueIconWrapper type={type}>
          <RocketIcon></RocketIcon>
        </BlueIconWrapper>
      );
  }
}

export default ItemIcon;