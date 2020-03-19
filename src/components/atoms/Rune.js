import React from 'react'
import styled from '@emotion/styled'
import Layout from '../../constants/layoutConstants'

function runeSize(type) {
  switch (type) {
    case 'keystone':
      return Layout.RUNE_SIZE_KS
    case 'tree':
      return Layout.RUNE_SIZE_TREE
    case 'menu':
      return Layout.RUNE_SIZE_MENU
    default:
      return Layout.RUNE_SIZE_TREE
  }
}

const S = {}
S.Rune = styled.div`
  position: relative;
  z-index: 1;
  width: ${(props) => runeSize(props.type)}px;
  height: ${(props) => runeSize(props.type)}px;

  background: ${Layout.RUNE_BG_COLOR};
  box-shadow: inset 0px 0px 12px rgba(0, 0, 0, 1);

  cursor: pointer;

  border-radius: ${(props) => runeSize(props.type)}px;
  border: ${Layout.RUNE_BORDER_WIDTH}px solid rgba(${(props) => props.color}, 1);
`
S.Highlighter = styled.div`
  content: ' ';
  position: absolute;
  top: ${Layout.RUNE_BORDER_WIDTH * -6}px;
  left: ${Layout.RUNE_BORDER_WIDTH * -6}px;
  right: ${Layout.RUNE_BORDER_WIDTH * -6}px;
  bottom: ${Layout.RUNE_BORDER_WIDTH * -6}px;
  border-radius: ${(props) => runeSize(props.type)}px;
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
    <S.Rune color={props.color} type={props.type}>
      <S.Highlighter color={props.color}></S.Highlighter>
    </S.Rune>
  )
}

export default Rune
