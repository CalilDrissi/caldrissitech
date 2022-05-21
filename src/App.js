import styled, { createGlobalStyle } from "styled-components";
import Hero from "./sections/Hero";
import Catalog from "./sections/Catalog";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
 
html {
  scrollbar-width: none;
  scroll-behavior:smooth;
}

body::-webkit-scrollbar {
  display: none;

}
  body{
    position:relative ;
    background: #121212;
    color: #fff ;
    font-family: Kanit;

   
 
  }

`;

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 60px;
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;

  @media (max-width: 990px) {
    grid-template-columns: 1fr;
    grid-template-rows: 40vh auto;
    grid-row-gap: 4rem;
  }
  @media (max-width: 490px) {
    grid-template-rows: 50vh auto;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Hero />
        <Catalog />
      </Main>
    </>
  );
}

export default App;
