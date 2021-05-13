import React from 'react'
import { Content } from './style'

const Spinner: React.FC = () => {
  return (
    <Content data-testid='spinner'><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></Content>
  )
}

export default Spinner
