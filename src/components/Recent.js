import React from "react";
import styled from "styled-components";
import { BsFileCode } from "react-icons/bs";
import {
  GithubOriginalIcon,
  GatsbyPlainIcon,
  WebpackPlainIcon,
} from "react-devicons";

const Box = styled.div`
  width: 100%;
  height: 200px;
  padding: 20px;

  background: #202020;
  flex-grow: stretch;
  transition: all 0.2s ease-out;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    z-index: 10;
    transform: scale(1.1, 1.1);
  }
`;
const Heading5 = styled.h5`
  font-weight: 300;
  font-size: 12px;
  line-height: 0.9;
  background: -webkit-linear-gradient(#6dd3fa, #4296f4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Body = styled.p`
  font-size: 16px;
  line-height: 1.2;
  font-weight: 100;
  margin-top: -5px;
  margin-bottom: 10px;
`;
const Check = styled.div`
  font-size: 12px;
  font-weight: 400;
`;
const Linky = styled.span`
  &:hover {
    filter: brightness(50%);
  }
`;

const Stack = styled.div`
  display: flex;
  justify-content: space-space-evenly;
  gap: 5px;
  margin-top: 10px;
`;

const HeadingSix = styled.h6`
  font-weight: 400;
  line-height: 0.5;
`;

const Recent = ({ type, title }) => {
  return (
    <Box>
      <h2>
        <Heading5>{type}</Heading5>
        {title}
      </h2>
      <Body>Web app for building schools & linking people</Body>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <div>
          <HeadingSix>Tech Stack:</HeadingSix>
          <Stack>
            {/* Search how to pass component as props */}
            <GithubOriginalIcon size="20px" color="white" />
            <GatsbyPlainIcon size="20px" color="white" />
            <WebpackPlainIcon size="20px" color="white" />
          </Stack>
        </div>
        <Check>
          <Linky>
            <BsFileCode style={{ marginRight: "2px" }} />
            Code
          </Linky>
        </Check>
      </div>
    </Box>
  );
};

export default Recent;
