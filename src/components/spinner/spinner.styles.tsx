import React from "react";
import styled, { keyframes } from "styled-components";

const animate = keyframes`
  0% {
    transform: translateX(-50%) scaleX(0);
    transform: rotate(0deg);
  }
  50% {
    opacity: 0;
    transform: translateY(-50%) scaleY(1);
  }
  100% {
    opacity: 1;
    transform: translateY(-50%) scaleY(0);
    transform: rotate(0deg);
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const LoaderBar = styled.div`
  width: 18px;
  height: 18px;
  margin: 100px 2px;
  border-radius: 50%;
  background-color: black;
  animation: ${animate} 1s linear infinite;
`;

export const LoaderBarRed = styled(LoaderBar)`
  background-color: #e74c3c;
`;

export const LoaderBarGreen = styled(LoaderBar)`
  background-color: #2ecc71;
`;
