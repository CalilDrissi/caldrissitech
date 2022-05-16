import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
    width: 100% ;
    height:  200px  ;
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
const Linky = styled.span`
    &:hover{
            filter: brightness(50%);
        }
`



const Stack = styled.div`
display:  flex;
justify-content: space-space-evenly ;
gap: 5px;
margin-bottom: 16px ;
margin-top: 10px ;
`


const Recent = ({type, title}) => {
  return (
    <Box>
         <Heading5>{type}</Heading5>
         <h2>{title}</h2>
         <Body>Web app for building schools & linking people together,teachers, Students, Admins and Parents</Body>
        
         <Check>
            <Linky>Source Code</Linky> 
            <span> | </span>
            <Linky> Live Site</Linky>
         </Check>
    </Box>
  )
}

export default Recent