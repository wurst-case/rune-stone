import React from 'react'
import styled from '@emotion/styled'
import Layout from '../../constants/layoutConstants'

const S = {}
S.FlavorMenuRune = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${Layout.RUNE_SIZE_FLAVOR_MENU}px;
  height: ${Layout.RUNE_SIZE_FLAVOR_MENU}px;

  background: transparent;
  box-shadow: inset 0px 0px 12px rgba(0, 0, 0, 1);

  cursor: pointer;

  border-radius: ${Layout.RUNE_SIZE_MENU}px;
  border: ${Layout.RUNE_BORDER_WIDTH}px solid;
  border-color: rgba(${Layout.GOLD}, ${(props) => (props.picked ? 0.5 : 0)});

  &:hover {
    border-color: rgba(${Layout.GOLD}, ${(props) => (props.picked ? 1 : 0)});

    img {
      filter: brightness(100%);
    }
  }

  & > img {
    width: ${Layout.RUNE_SIZE_FLAVOR_MENU - 24}px;
    filter: brightness(50%);
  }
`

function FlavorMenuRune(props) {
  return (
    <S.FlavorMenuRune color={props.color} type={props.type} picked={props.picked}>
      <img alt="flavor" src={props.img} />
    </S.FlavorMenuRune>
  )
}

export default FlavorMenuRune
