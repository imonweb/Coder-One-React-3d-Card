import React from 'react';
import styled from "styled-components";

const CardContainer = styled.div `
 width: 285px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: #1d1f21;
  color: #fff;
  position: relative;
  cursor: grab;
`;

const CircleWrapper = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 25px;
`;

const Circle = styled.div `
  position: absolute;
  width: 350px;
  height: 350px;
  top: -4.2em;
  right: -10em;
  z-index: 5;
  background-color: #fbbe01;
  border-radius: 50%;
`;

export function  NikeCard(props){
  return 
  <CardContainer>
    <CircleWrapper>
      <Circle />
    </CircleWrapper>
  </CardContainer>
}