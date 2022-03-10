import React from 'react';
import ActivityInfo from './ActivityInfo';
import BusinessInfo from './BusinessInfo';
import AdditionalInfo from './AdditionalInfo';
import { getColor } from "../../theme/theme";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const PeopleNav = styled.div`
  height: 50px;
  width: 100%;
  border-radius: 0px;
  margin: 0  0 10px 0;

  background: ${getColor('white')};
  box-shadow: inset 0px -1px 0px ${getColor('greyLightest')};
`;
const PeopleBoard = styled.div`
  height: fit-content;
  width: 100%;
  min-width: 850px;
  background-color: ${getColor('greyLightest')};
`;
const PageTitle = styled.div`
  width: 62px;
  height: 18px;
  left: 0px;
  top: calc(50% - 20px/2);
  position: relative;

  font-family: "proxima-nova";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: ${getColor('greyDarkest')};
`;
const PeopleBoardSections = styled.div`
  display: flex;
  position: relative;
`;


function People() {
  return (
    <PeopleBoard>
      <Helmet>
        <meta name="viewport" content="width=device-width, 
       initial-scale=1, maximum-scale=5.0, minimum-scale=1"/>
      </Helmet>
      <PeopleNav>
        <PageTitle>People</PageTitle>
      </PeopleNav>
      <PeopleBoardSections>
        <BusinessInfo />
        <ActivityInfo />
        <AdditionalInfo />
      </PeopleBoardSections>
    </PeopleBoard>
  );

}

export default People;