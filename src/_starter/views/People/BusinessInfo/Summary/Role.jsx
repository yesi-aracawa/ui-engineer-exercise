import React from 'react';
import styled from "styled-components";
import { getColor } from "../../../../theme/theme";

const FacebookLink = styled.a`
  color: ${getColor('blue')};
  text-decoration: none;
  font-family: "proxima-nova";
  font-style: normal;
  font-weight: 600;
`;
const DisplayName = styled.label`
  font-family: "proxima-nova";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 24px;
  margin: 5px;
`;
const BusinessTitle = styled.label`
  font-family: "proxima-nova";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
`;
const RoleDetails = styled.div`
  position: relative;
  display: grid;
  margin: 10px;
`;

function Role({businessInfo}){
    return(
        <RoleDetails>
          <DisplayName>{businessInfo.display_name}</DisplayName>
          <BusinessTitle>{businessInfo.title}</BusinessTitle>
          <FacebookLink href={`https://www.facebook.com/${businessInfo.person_company_name}`}>Facebook</FacebookLink>
        </RoleDetails>
    );
}
export default Role;