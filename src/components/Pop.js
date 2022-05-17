import styled from 'styled-components';


const Popup = styled.div`
  background: grey;

`

const Box = styled.div`

`


const Pop = ({closePop}) => {
  return (
    <Popup>
            <Box>
                <button onClick={()=> closePop(false)}>X</button>
                <h1>Title</h1>
                <form>
                    <input type="email" />
                    <input type="text" />
                    <textarea> here you write</textarea>
                </form>
            </Box>
    </Popup>
  )
}

export default Pop