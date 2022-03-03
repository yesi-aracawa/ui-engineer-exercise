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
  margin: 0  0 10px 0;

  background: ${getColor('white')};
  box-shadow: inset 0px -1px 0px ${getColor('greyLightest')};
`;
const PeopleBoard = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${getColor('greyLightest')};
`;
const PageTitle = styled.div`
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
const PeopleBoardSections =styled.div`
  display: flex;
`;

function People() {
  return (
    <PeopleBoard>
      <PeopleNav>
        <PageTitle>People</PageTitle>
      </PeopleNav>
      <PeopleBoardSections>
        <BusinessInfo/>
        <ActivityInfo/>
        <AdditionalInfo/>
      </PeopleBoardSections>
    </PeopleBoard>
  );

}

export default People;