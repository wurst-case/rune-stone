import React from 'react'
import styled from '@emotion/styled'

const S = {}
S.Branch = styled.div`
  width: 4px;
  height: 54px;
  background-color: rgba(${(props) => props.color}, 0.5);
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
      <S.Branch color={props.color} />
    </S.Outline>
  )
}

export default Branch
