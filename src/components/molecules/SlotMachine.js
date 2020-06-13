import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import Rune from '../atoms/Rune'
import Machine from '../../assets/bandle/t3/machine_locked.png'

const S = {}
S.pull = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1080deg);
  }
`

S.SlotMachine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & > #smRune img {
    animation: ${S.pull} 2s ease-out;
  }

  box-shadow: 0 0 20 rgba(0, 255, 0, 0.5);
`

function SlotMachineRune({ targetRune, color, active, onClick }) {
  return (
    <S.SlotMachine>
      <Rune id="smRune" color={color} img={Machine} active={active} onClick={onClick} />
    </S.SlotMachine>
  )
}

export default SlotMachineRune
