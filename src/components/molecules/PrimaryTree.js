import React from 'react'
import styled from '@emotion/styled'
import Rune from '../atoms/Rune'
import Branch from '../atoms/Branch'
import FlavorRune from '../atoms/FlavorRune'
import ability from '../../assets/domination/t1/cheap-shot.webp'
import ks from '../../assets/domination/keystones/electrocute.webp'

const S = {}
S.Tree = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 24px;
`

function PrimaryTree(props) {
  return (
    <S.Tree>
      <FlavorRune color={props.color} />
      <Branch color={props.color} padding={4} />
      <Rune color={props.color} keystone img={ks} />
      <Branch color={props.color} padding={-16} />
      <Rune color={props.color} img={ability} />
      <Branch color={props.color} />
      <Rune color={props.color} img={ability} />
      <Branch color={props.color} />
      <Rune color={props.color} img={ability} active />
    </S.Tree>
  )
}

export default PrimaryTree
