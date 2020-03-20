import React from 'react'
import styled from '@emotion/styled'
import Rune from '../atoms/Rune'
import Branch from '../atoms/Branch'
import FlavorRune from '../atoms/FlavorRune'

const S = {}
S.Tree = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 8px;
`

function PrimaryTree(props) {
  return (
    <S.Tree>
      <FlavorRune color={props.color} />
      <Branch color={props.color} padding={4} />
      <Rune color={props.color} type="tree" />
      <Branch color={props.color} />
      <Rune color={props.color} type="tree" />
    </S.Tree>
  )
}

export default PrimaryTree
