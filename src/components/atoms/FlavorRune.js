import React from 'react'
import styled from '@emotion/styled'
import Layout from '../../constants/layoutConstants'

const S = {}
S.FlavorRune = styled.div`
  width: ${Layout.RUNE_SIZE_FLAVOR}px;
  height: ${Layout.RUNE_SIZE_FLAVOR}px;

  border-radius: 100%;
  background-color: transparent;
  margin-bottom: 7px;
  cursor: pointer;

  border: 10px solid;
  border-color: rgba(${(props) => props.color}, 0.5);
`

function FlavorRune(props) {
  return <S.FlavorRune color={props.color} />
}

export default FlavorRune
