import React from 'react';
import styled from "styled-components";
import { getColor } from "../../../_starter/theme/theme";

const BussinessCard = styled.div`
  height: 166px;
  width: 300px;
  left: 0px;
  top: 0px;
  border-radius: 0px;

  position: absolute;
  right: 0%;
  bottom: 0%;

  background: ${getColor('white')};
  border: 1px solid ${getColor('greyLightest')};
  box-sizing: border-box;
`;
const BussinessCardHeader = styled.div`
  height: 32px;
  width: 300px;
  left: 0px;
  top: 0px;
  border-radius: 0px;
`;
const BusinessCardBody = styled.div`
  height: 134px;
  width: 300px;
  left: 0px;
  top: 0px;
  border-radius: 0px;
`;
const BusinessContainer = styled.div`
  height: 100%;
  width: 300px;
  top: 120px;
  left: 60px;
  background-color: ${getColor('greyLightest')};
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
          <div class='social-icons'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </BusinessCardBody>
      </BussinessCard>
      <div></div>
      <div></div>
      <div></div>
    </BusinessContainer>
  );

}

export default BusinessInfo;