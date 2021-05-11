import React, { useContext } from 'React'
import { Spinner } from '../index'
import { Content } from './style'
import Context from '@/presentaion/contexts/form/formContext'

const FormStatus: React.FC = () => {
  const { loading, errorMessage } = useContext(Context)

  return (
    <Content data-testid="error-wrap">
      {loading && <Spinner />}
      {errorMessage && <span>{errorMessage}</span>}
    </Content>
  )
}

export default FormStatus
