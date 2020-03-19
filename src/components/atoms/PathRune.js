import React from 'react'
import styled from '@emotion/styled'
import Layout from '../../constants/layoutConstants'

const S = {}
S.PathRune = styled.div`
  width: ${Layout.RUNE_SIZE_PATH}px;
  height: ${Layout.RUNE_SIZE_PATH}px;

  border-radius: 100%;
  background-color: transparent;
  margin-bottom: 7px;
  cursor: pointer;

  border: 10px solid;
  border-color: rgba(${(props) => props.color}, 0.5);
`

function PathRune(props) {
  return <S.PathRune color={props.color} />
}

export default PathRune
