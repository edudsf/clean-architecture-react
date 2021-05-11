import styled from 'styled-components'

export const Content = styled.div`
display: flex;
justify-content: center;
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 12px;
}
.lds-ellipsis div {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #346b21;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
    background: #346b21;
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
    background: #fff;
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    background: #b3e46e;
    transform: translate(24px, 0);
  }
}

`
