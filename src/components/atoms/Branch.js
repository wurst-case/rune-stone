import React from 'react'
import styled from '@emotion/styled'
import { keyframes, css } from '@emotion/core'

const S = {}

S.pulse = keyframes`
0%{background-position:50% -10%}
100%{background-position:50% 110%}
`

S.glow = (color) => keyframes`
  0%{
    box-shadow: 0px 0px 6px 4px rgba(${color}, 0.15)
  }
  50%{
    box-shadow: 0px 0px 12px 8px rgba(${color}, 0.25)
  }
  100%{
    box-shadow: 0px 0px 6px 4px rgba(${color}, 0.15)
  }
`

S.Branch = styled.div`
  width: 4px;
  height: 54px;

  background: linear-gradient(
    180deg,
    rgba(${(props) => props.color}, 0.25),
    rgba(${(props) => props.color}, 0.75),
    rgba(${(props) => props.color}, 0.25)
  );
  background-size: 600% 600%;

  animation: ${(props) => {
    if (props.active)
      return css`
      ${S.glow(props.color)} 1.5s ease-in-out infinite,
      ${S.pulse} 0.75s linear infinite reverse
    `
  }};
`
S.Outline = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: ${(props) => (props.padding ? props.padding - 4 : -4)}px;
  margin-bottom: -4px;
  width: 8px;
  border: 2px solid;
  border-color: rgba(255, 255, 255, 0.1);
`

function Branch(props) {
  return (
    <S.Outline color={props.color} padding={props.padding}>
      <S.Branch color={props.color} active={props.active} />
    </S.Outline>
  )
}

export default Branch
