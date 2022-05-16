import styled from 'styled-components'
import Featured from '../components/Featured'
import Recent from '../components/Recent'


const Container = styled.div`
/* this need pseud element after */
 /* -moz-box-shadow: inset 0 -100px 100px -100px white; */
  /* -webkit-box-shadow: inset 0 -100px 100px -100px white; */
  /* box-shadow: inset 0 -100px 100px -100px white; */
   width:  clamp(30vw,45vw, 550px);
  grid-column-start: 2;
  grid-column-end:3 ;
  padding-right: 10px ;
 margin-left: .5rem;



 @media (max-width: 990px) {
  grid-row-start: 2;
  width: 100% ;
  grid-column-start: 1;
  grid-column-end:2 ;
  padding: 0 10%;
}

@media (max-width: 490px) {
    grid-row-start: 2 ;


}

 

`

const  BoxSquare = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
justify-items: stretch ;
grid-gap: 1rem ;
margin-top: 3rem ;
margin-bottom: 20px ;

@media (max-width: 580px) {
    grid-template-columns: 1fr ;


}
&:hover > div:not(:hover){
  opacity: 0.5;
}
`
const BoxRec = styled.div`
width: 100% ;
 display: flex ;
  gap: 16px;
  flex-direction: column;
&:hover > div:not(:hover){
  opacity: 0.5;
}
`
const HeadingCat = styled.h2`
      font-size: 22px ;
      text-decoration: underline;
      font-weight: 500 ;
      margin: 2rem  0;
      display: none ;

      @media (max-width: 990px){
        display: block ;
      }
`

const Catalog = () => {
  return (
    <Container>
         <HeadingCat>Most Recent Projects</HeadingCat>
          <BoxRec id="section1">
            <Featured  type="Full Stack" title="Colegio.link"/>
            <Featured  type="Full Stack" title="Colegio.link"/>
            <Featured  type="Full Stack" title="Colegio.link"/>
            </BoxRec>

            <HeadingCat> Older Projects  </HeadingCat>
            <BoxSquare   id="section2">
                    <Recent title="coll" type="desktop" />
                    <Recent title="coll" type="desktop" />
                    <Recent title="coll" type="desktop" />
                    <Recent title="coll" type="desktop" />
                    <Recent title="coll" type="desktop" />
                    <Recent title="coll" type="desktop" />
                    <Recent title="coll" type="desktop" />
                    <Recent title="coll" type="desktop" />
                    <Recent title="coll" type="desktop" />
                    <Recent title="coll" type="desktop" />
                    <Recent title="coll" type="desktop" />
            </BoxSquare>

            <footer style={{marginTop:"30px" , marginLeft: "5px", fontWeight: "100"}}> Calil Drissi@ 2022</footer>
    </Container>
  )
}

export default Catalog