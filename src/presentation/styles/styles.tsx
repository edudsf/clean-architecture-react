import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Rajdhani', sans-serif;
    text-decoration: none;
    list-style: none;
  }

  #main {
    display: flex;
    height: 90vh;
  }
`

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ${'' /* @media screen and (max-width: 1024px) {
  } */}
`

export default GlobalStyle
