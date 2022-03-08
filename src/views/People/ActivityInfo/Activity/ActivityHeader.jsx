import React from 'react';
import { default as ChevronSmDownIcon } from "../../../../_starter/shared/Icons/ChevronSmDown";
import { default as PhoneIcon } from "../../../../_starter/shared/Icons/Phone";
import { default as PlusIcon } from "../../../../_starter/shared/Icons/Plus";
import styled from "styled-components";
import { getColor } from "../../../../_starter/theme/theme";

const ActivityDetailButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ActivityDpwnBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 96px;
  height: 32px;
  padding: 8px 12px;
  color: ${getColor('greyDarkest')};
  background: ${getColor('white')};
  border-radius: 4px;
  border: 1px solid ${getColor('greyLightest')};
  margin: 16px 10px 16px 20px;
`;
const PersonDropdownBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  width: 96px;
  height: 32px;
  padding: 8px 12px;
  border-radius: 4px;
  margin: 16px 10px 16px 20px;
  color: ${getColor('white')};
  background: ${getColor('blue')};
  border: 1px solid ${getColor('greyLightest')};
`;
const BtnTitle = styled.label`
  margin: 0 8px;
`;
const LogActivityLink = styled.a`
  line-height: 16px;
  margin: auto 10px;
  display: flex;
  font-family: "proxima-nova";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: ${getColor('blue')};
`;
const DropdownButtons = styled.div`
  display: flex;
`;
const LogActivityButtons = styled.div`
  display: flex;
`;
const IconWrapper = styled.div`
  width: 16px;
  height: 16px;
  align-items: center;
  text-align: center;
  border: 1px solid ${getColor('white')};
  color: ${getColor('blue')};
  display: flex;
  justify-content: center;
`;

function ActivityDetailHeader() {
  return (
    <ActivityDetailButtons>
      <DropdownButtons>
        <PersonDropdownBtn typeof="button">
          <BtnTitle>Person</BtnTitle>
          <ChevronSmDownIcon />
        </PersonDropdownBtn>
        <ActivityDpwnBtn>
          <BtnTitle>Activity</BtnTitle>
          <ChevronSmDownIcon />
        </ActivityDpwnBtn>
      </DropdownButtons>
      <LogActivityButtons>
        <LogActivityLink role='button'>
          <IconWrapper>
            <PhoneIcon />
          </IconWrapper>
          <BtnTitle>Log a Call</BtnTitle>
        </LogActivityLink>
        <LogActivityLink role='button'>
          <IconWrapper>
            <PlusIcon />
          </IconWrapper>
          <BtnTitle>Add a Note</BtnTitle>
        </LogActivityLink>
      </LogActivityButtons>
    </ActivityDetailButtons>
  );
}
export default ActivityDetailHeader;