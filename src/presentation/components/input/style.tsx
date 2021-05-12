import styled from 'styled-components'

export const InputContainer = styled.div`
& input {
  width: 100%;
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
