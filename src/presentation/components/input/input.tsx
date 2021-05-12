import React, { useContext } from 'react'
import Context from '@/presentation/contexts/form/formContext'
import { InputContainer } from './style'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { errorState, stateLogin, setStateLogin } = useContext(Context)
  const error = errorState[props.name]

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setStateLogin({
      ...stateLogin,
      [event.target.name]: event.target.value
    })
    console.log(stateLogin)
  }

  return (
    <InputContainer>
      <input {...props} data-testid={props.name} onChange={handleChange} />
      <span data-testid={`${props.name}-status`} title={error}></span>
    </InputContainer>
  )
}

export default Input
