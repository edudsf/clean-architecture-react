import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
  & img {
    margin: 0 auto;
    width: 200px;
  }
`

export const Content = styled.div`
  & form {
    width: 328px;
    display: flex;
    flex-flow: column nowrap;
    
    & button {
      height: 42px;
      border: 0;
      background: 0;
      margin-top: 8px;
    }

    & > button:first-of-type {
      font-size: 15px;
      border-radius: 4px;
      background-color: #5cb646;
      border-radius: 2px;
      color: #fff;
    }
  }

  & h2 {
    text-align: center;
    padding: 16px 0;
    letter-spacing: -0.39px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
  }
  
  & input {
    margin: 8px 0;
    border-radius: 4px;
    border: solid 1px #b8b8b8;
    padding: 16px;

    &::placeholder {
      color: #d0d0d0;
    }

    &:focus {
      outline: none;
    }
  }
`
