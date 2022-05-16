import styled from 'styled-components'
import { GithubOriginalIcon,  GatsbyPlainIcon, WebpackPlainIcon} from "react-devicons";

const Box = styled.div`

    width: 100% ;
    height:  220px  ;
    padding: 20px ;
    background: #202020;
    flex-grow: stretch;
    transition: all  .2s ease-out;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between ;
    &:hover{
      z-index: 10;
      transform:  scale(1.1, 1.1);
    }

    @media (max-width: 990px) {
      height: 250px ;
    }
  
`
const Heading5 = styled.h5`
    font-weight: 300;
    font-size: 12px ;
    line-height: 1.1 ;
  background: -webkit-linear-gradient(#6DD3FA, #4296f4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

`
const Body = styled.p`
   font-size: 16px ;
   font-weight: 100 ;
   margin-top: -5px ;
`
const Check = styled.div`
        font-size: 12px ;
        font-weight: 400 ;
    
`

const Stack = styled.div`
display:  flex;
justify-content: space-space-evenly ;
gap: 5px;
margin-bottom: 16px ;
margin-top: 10px ;
`

const Linky = styled.span`
    &:hover{
            filter: brightness(50%);
        }
      
      &:hover + div  {
        opacity:1;
        transform: translateX(-50%) translateY(0) scale(1);

      }
`

 
const FrameDiv = styled.div`
transition:.2s ease-in-out opacity, .2s ease-in-out transform;
  opacity:0;
  padding: auto;
  position:absolute;
  bottom: 40px;
  left:40px;
  width: 210px;
  height:150px;
  overflow-x:hidden;
  overflow-y:auto;
  transform-origin:center bottom;
  transform: translateX(-50%) translateY(10px) scale(.9);
  
  iframe {
    transform:scale(.2);
    transform-origin:0 0;
  }
`

const Featured = ({type, title}) => {
  return (
    <Box>
          <Heading5>{type}</Heading5>
         <h2>{title}</h2>
         <Body>Web app for building schools & linking people together,teachers, Students, Admins and Parents</Body>
         <h6>Tech Stack:</h6>
         <Stack>
             {/* Search how to pass component as props */}
         <GithubOriginalIcon size="20px" color="white" />
         <GatsbyPlainIcon size="20px" color="white" />
         <WebpackPlainIcon size="20px" color="white" />

            
            
          </Stack>
        
         <Check>

            <Linky>Source Code</Linky> 
            {/* <FrameDiv>
                   <iframe 

                   src="https://calil.tech"
height="2000px" width="1000px" ></iframe>
            </FrameDiv>
        */}
            <span> | </span>
            <Linky> Live Site</Linky>
            {/* <FrameDiv>
                   <iframe 
                    
                   src="https://braydoncoyer.dev/"
height="2000px" width="1000px" ></iframe>
            </FrameDiv> */}
         </Check>
    </Box>
  )
}

export default Featured