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

  min-width: ${Layout.RUNE_SIZE_FLAVOR_MENU}px;
  height: ${Layout.RUNE_SIZE_FLAVOR_MENU}px;

  background: transparent;
  /* box-shadow: inset 0px 0px 12px rgba(0, 0, 0, 1); */

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
    width: ${Layout.RUNE_SIZE_FLAVOR_MENU - 12}px;
    filter: brightness(50%);

    @media only screen and (max-width: 1100px) {
      filter: brightness(100%);
    }
  }
`

function FlavorMenuRune({ color, picked, onClick, img }) {
  return (
    <S.FlavorMenuRune color={color} picked={picked} onClick={(_) => (onClick ? onClick() : console.log())}>
      <img alt="flavor" src={img} />
    </S.FlavorMenuRune>
  )
}

export default FlavorMenuRune
