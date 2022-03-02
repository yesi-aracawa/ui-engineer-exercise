import React from 'react';
import ActivityInfo from './ActivityInfo';
import BusinessInfo from './BusinessInfo';
import AdditionalInfo from './AdditionalInfo';
import { getColor } from "../../_starter/theme/theme";
import styled from "styled-components";

const PeopleNav = styled.div`
  height: 50px;
  width: 100%;
  border-radius: 0px;

  position: absolute;
  left: 60px;
  right: 0px;
  top: 60px;
  bottom: 0px;

  background: ${getColor('white')};
  box-shadow: inset 0px -1px 0px ${getColor('greyLightest')};
`;
const PeopleBoard = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${getColor('greyLightest')};
`;
const PageTitle = styled.div`
  position: absolute;
  width: 62px;
  height: 18px;
  left: 0px;
  top: calc(50% - 18px/2);

  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 18px;
  color: ${getColor('greyDarkest')};
`;

function People() {
  return (
    <PeopleBoard>
      <PeopleNav><PageTitle>People</PageTitle></PeopleNav>
      <BusinessInfo/>
      <ActivityInfo/>
      <AdditionalInfo/>
    </PeopleBoard>
  );

}

export default People;