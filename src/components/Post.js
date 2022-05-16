import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height:  100px ;
  padding: 10px 15px 0px 15px;
  border-bottom: 1px solid #fff ;
  background: #202020;
  cursor: pointer;
  transition: all  .2s ease-out;
  &:hover{
      z-index: 10;
      transform:  scale(1.1, 1.1);
    }

`
const Post = () => {
  return (
    <Container>
        <h2>Title</h2>
        <p>small description</p>
        <p>date of publication</p>
      </Container>
  )
}

export default Post