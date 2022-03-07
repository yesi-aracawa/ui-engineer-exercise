import React from 'react';
import { default as ChevronSmDownIcon } from "../../../_starter/shared/Icons/ChevronSmDown";
import { default as PhoneIcon } from "../../../_starter/shared/Icons/Phone";
import { default as PlusIcon } from "../../../_starter/shared/Icons/Plus";
import styled from "styled-components";
import { getColor } from "../../../_starter/theme/theme";

const ActivityDetailButtons = styled.div`
  display: flex;
`;
const ActivityDpwnBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 88px;
  height: 32px;
  padding: 8px 12px;
  border-radius: 4px;
  margin: 16px 10px 16px 20px;
  color: ${getColor('greyDarkest')};
  background: ${getColor('white')};
  border: 1px solid ${getColor('greyLightest')};
`;
const PersonDropdownBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  width: 88px;
  height: 32px;
  padding: 8px 12px;
  border-radius: 4px;
  margin: 16px 10px 16px 20px;
  color: ${getColor('white')};
  background: ${getColor('blue')};
`;
const BtnTitle = styled.label`
  margin: 0 8px;
`;
const LogActivityLink = styled.a`
  line-height: 16px;
  margin: auto 10px;
  font-family: Proxima Nova;
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

function ActivityDetailHeader(){
    return(
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
            <PhoneIcon />
            <BtnTitle>Log a Call</BtnTitle>
          </LogActivityLink>
          <LogActivityLink role='button'>
            <PlusIcon />
            <BtnTitle>Add a Note</BtnTitle>
          </LogActivityLink>
        </LogActivityButtons>
        </ActivityDetailButtons>
    );
}
export default ActivityDetailHeader;