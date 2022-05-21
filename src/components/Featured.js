import styled from "styled-components";
import {
  GithubOriginalIcon,
  GatsbyPlainIcon,
  WebpackPlainIcon,
} from "react-devicons";
import { BsFileCode } from "react-icons/bs";
import { BsDoorOpen } from "react-icons/bs";

const Box = styled.div`
  overflow-y: hidden;
  width: 100%;
  height: 210px;
  padding: 20px 20px 5px 20px;
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

  @media (max-width: 990px) {
    height: 250px;
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
  margin-bottom: 20px;
`;
const Check = styled.div`
  margin-top: 3px;
  font-size: 12px;
  font-weight: 400;
`;

const Stack = styled.div`
  display: flex;
  justify-content: space-space-evenly;
  gap: 5px;
  margin-bottom: 16px;
  margin-top: 10px;
`;

const Linky = styled.span`
  font-weight: 300;
  font-size: 14px;
  &:hover {
    filter: brightness(50%);
  }

  &:hover + div {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(1);
  }
`;

const FrameDiv = styled.div`
  transition: 0.2s ease-in-out opacity, 0.2s ease-in-out transform;
  opacity: 0;
  padding: auto;
  position: absolute;
  bottom: 40px;
  left: 40px;
  width: 210px;
  height: 150px;
  overflow-x: hidden;
  overflow-y: auto;
  transform-origin: center bottom;
  transform: translateX(-50%) translateY(10px) scale(0.9);

  iframe {
    transform: scale(0.2);
    transform-origin: 0 0;
  }
`;

const HeadingSecondary = styled.h2`
  margin-bottom: 7px;
`;
const HeadingSix = styled.h6`
  font-weight: 400;
  line-height: 0.5;
`;

const Featured = ({ type, title }) => {
  return (
    <Box>
      <Heading5>{type}</Heading5>
      <HeadingSecondary>{title}</HeadingSecondary>
      <div></div>
      <Body>
        Web app for building schools & linking people together,teachers,
        Students, Admins and Parents
      </Body>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
          {/* <FrameDiv>
                   <iframe 

                   src="https://calil.tech"
height="2000px" width="1000px" ></iframe>
            </FrameDiv>
        */}
          <span> &nbsp; </span>
          <Linky style={{ marginLeft: "10px" }}>
            <BsDoorOpen style={{ marginRight: "2px" }} />
            Open
          </Linky>

          {/* <FrameDiv>
                   <iframe 
                    
                   src="https://braydoncoyer.dev/"
height="2000px" width="1000px" ></iframe>
            </FrameDiv> */}
        </Check>
      </div>
    </Box>
  );
};

export default Featured;
