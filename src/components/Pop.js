import styled from "styled-components";

const Popup = styled.div`
  background: grey;
`;

const Box = styled.div`
  background: #202020;
`;

const Pop = ({ closePop }) => {
  return (
    <Popup>
      <Box>
        <button onClick={() => closePop(false)}>X</button>
        <h1>Title</h1>
        <form>
          <input style={{ display: "block" }} type="email" />
          <input style={{ display: "block" }} type="text" />
          <textarea style={{ display: "block" }}> here you write</textarea>
        </form>
      </Box>
    </Popup>
  );
};

export default Pop;
