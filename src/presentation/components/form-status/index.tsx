import React, { useContext } from 'react'
import { Spinner } from '../index'
import { Content } from './style'
import Context from '@/presentation/contexts/form/formContext'

const FormStatus: React.FC = () => {
  const { stateLogin, errorState } = useContext(Context)
  return (
    <Content data-testid="error-wrap">
      {stateLogin.loading && <Spinner />}
      {errorState.errorMessage && <span data-testid="main-error">{errorState.errorMessage}</span>}
    </Content>
  )
}

export default FormStatus
