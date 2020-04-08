import React from 'react'
import styled from '@emotion/styled'
import Layout from '../../constants/layoutConstants'
import { ReactComponent as Rings } from '../../assets/rings.svg'

const S = {}
S.FlavorRune = styled.div`
  width: ${Layout.RUNE_SIZE_FLAVOR + 20}px;
  height: ${Layout.RUNE_SIZE_FLAVOR + 20}px;

  border-radius: 100%;
  background-color: transparent;
  margin-bottom: 7px;
  cursor: pointer;

  .rings {
    fill: linear-gradient(to left, rgba(${(props) => props.color}, 1), rgba(${(props) => props.color}, 0));
  }
`

function FlavorRune(props) {
  return (
    <S.FlavorRune color={props.color} onClick={(_) => props.onClick()}>
      <Rings className="rings" />
    </S.FlavorRune>
  )
}

export default FlavorRune
