import React, { useContext } from 'react'
import Context from '@/presentation/contexts/form/formContext'
import { InputContainer } from './style'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { errorState } = useContext(Context)
  const error = errorState[props.name]
  return (
    <InputContainer>
      <input {...props} />
      <span data-testid={`${props.name}-status`} title={error}></span>
    </InputContainer>
  )
}

export default Input
