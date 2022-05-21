import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 140px;
  padding: 10px 15px 5px 15px;
  border-bottom: 1px solid #949495;
  background: #202020;
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    z-index: 10;
    transform: scale(1.1, 1.1);
  }
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 1.5rem;
`;

const SubTitle = styled.p`
  color: #fff;
  font-weight: 100;
  font-size: 14px;
`;

const Date = styled.p`
  color: #949494;
  font-weight: 300;
  font-size: 12px;
  text-align: right;
`;

const Heading5 = styled.h5`
  font-weight: 300;
  font-size: 12px;
  line-height: 0.9;
  background: -webkit-linear-gradient(#6dd3fa, #4296f4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Post = ({ title, platform }) => {
  return (
    <Container>
      <Title>
        <Heading5>{platform}</Heading5>
        {title}
      </Title>
      <SubTitle>
        {" "}
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry
      </SubTitle>
      <Date>December 15, 2022 </Date>
    </Container>
  );
};

export default Post;
