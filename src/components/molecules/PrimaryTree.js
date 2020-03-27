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
  margin: 24px;
`

function PrimaryTree(props) {
  let { color, keystone, t1, t2, t3 } = props
  return (
    <S.Tree>
      <FlavorRune color={color} />
      <Branch color={color} padding={4} />
      <Rune color={color} keystone img={keystone ? keystone.src : null} />
      <Branch color={color} padding={-16} />
      <Rune color={color} img={t1 ? t1.src : null} />
      <Branch color={color} />
      <Rune color={color} img={t2 ? t2.src : null} />
      <Branch color={color} />
      <Rune color={color} img={t3 ? t3.src : null} active />
    </S.Tree>
  )
}

export default PrimaryTree
