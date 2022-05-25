import styled from "styled-components";
import { createPortal } from 'react-dom';

const Popup = styled.div`
 position: fixed ;
 top: 0;
  z-index: 10;
  background rgba(12,12,12,0.9);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
position: relative;
background-color: #121212 ;
  width: 500px;
  height: 500px ;
  padding: 30px;
  border: solid 1px #fefefe;
  & * {
    margin: 10px ;
  }
`;

const Pop = ({ closePop }) => {
  return createPortal(
    <Popup>
      <Box>
        <button onClick={() => closePop(false)} style={{position: "absolute", right: "0"}}>X</button>
        <h1>Title</h1>
        <form>
          <input style={{ display: "block" }} type="email" placeholder="email" />
          <input style={{ display: "block" }} type="text" placeholder="name" />
          <textarea style={{ display: "block" }}> write your message here</textarea>
          <button>Send</button>
        </form>
      </Box>
    </Popup>,
    document.getElementById('portal')
  );
};

export default Pop;
