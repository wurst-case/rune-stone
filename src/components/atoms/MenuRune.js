import React from 'react'
import styled from '@emotion/styled'
import Layout from '../../constants/layoutConstants'

const S = {}
S.Rune = styled.div`
  position: relative;
  z-index: 1;
  width: ${Layout.RUNE_SIZE_MENU}px;
  height: ${Layout.RUNE_SIZE_MENU}px;

  background: ${Layout.RUNE_BG_COLOR};
  box-shadow: inset 0px 0px 12px rgba(0, 0, 0, 1);

  cursor: pointer;

  border-radius: ${Layout.RUNE_SIZE_MENU}px;
  border: ${Layout.RUNE_BORDER_WIDTH}px solid rgba(${(props) => (props.disabled ? Layout.GREY : props.color)}, 1);

  &:hover {
    border: ${Layout.RUNE_BORDER_WIDTH}px solid rgba(${(props) => props.color}, 1);

    & > img {
      filter: none;
      -webkit-filter: grayscale(0);
      filter: grayscale(0);
    }
  }

  & > img {
    width: ${Layout.RUNE_SIZE_MENU}px;
    filter: ${(props) => (props.disabled ? 'gray' : 'none')};
    -webkit-filter: ${(props) => (props.disabled ? 'grayscale(1)' : 'none')};
    filter: ${(props) => (props.disabled ? 'grayscale(1)' : 'none')};
  }
`
S.Highlighter = styled.div`
  content: ' ';
  position: absolute;
  top: ${Layout.RUNE_BORDER_WIDTH * -6}px;
  left: ${Layout.RUNE_BORDER_WIDTH * -6}px;
  right: ${Layout.RUNE_BORDER_WIDTH * -6}px;
  bottom: ${Layout.RUNE_BORDER_WIDTH * -6}px;
  border-radius: ${Layout.RUNE_SIZE_MENU}px;
  border: ${Layout.RUNE_BORDER_WIDTH * 1.5}px solid rgba(${(props) => props.color}, 0);
  transition: border ${Layout.ATTACK}, top ${Layout.ATTACK}, left ${Layout.ATTACK}, right ${Layout.ATTACK},
    bottom ${Layout.ATTACK};

  &:hover {
    top: ${Layout.RUNE_BORDER_WIDTH * -4}px;
    left: ${Layout.RUNE_BORDER_WIDTH * -4}px;
    right: ${Layout.RUNE_BORDER_WIDTH * -4}px;
    bottom: ${Layout.RUNE_BORDER_WIDTH * -4}px;
    border: ${Layout.RUNE_BORDER_WIDTH * 1.5}px solid rgba(${(props) => props.color}, 0.5);
  }
`

function Rune(props) {
  return (
    <S.Rune color={props.color} type={props.type} disabled={props.disabled}>
      <img alt="flavor" src={props.img} />
      <S.Highlighter color={props.color}></S.Highlighter>
    </S.Rune>
  )
}

export default Rune
