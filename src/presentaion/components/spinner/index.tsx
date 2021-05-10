import React from 'React'
import { Content } from './style'

const Spinner: React.FC = () => {
  return (
    <Content><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></Content>
  )
}

export default Spinner
