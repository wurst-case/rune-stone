import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import Layout from '../../constants/layoutConstants'
import spark from '../../assets/spark.png'

const S = {}
S.spin = keyframes`
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
`

S.Rune = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => (props.keystone ? Layout.RUNE_SIZE_KS : Layout.RUNE_SIZE_REG)}px;
  height: ${(props) => (props.keystone ? Layout.RUNE_SIZE_KS : Layout.RUNE_SIZE_REG)}px;

  background: ${Layout.RUNE_BG_COLOR};
  box-shadow: inset 0px 0px 12px rgba(0, 0, 0, 1);

  cursor: pointer;

  border-radius: ${(props) => (props.keystone ? Layout.RUNE_SIZE_KS : Layout.RUNE_SIZE_REG)}px;
  border: ${Layout.RUNE_BORDER_WIDTH}px solid rgba(${(props) => props.color}, 1);

  & > img.graphic {
    /* Image size larger proportionally if keystone rune by 75% and active runes decrease image sixe by 20%*/
    width: ${(props) =>
      (props.keystone ? Layout.RUNE_SIZE_KS * 1.75 : Layout.RUNE_SIZE_REG) * (props.active ? 0.8 : 1)}px;
  }
`

S.Highlighter = styled.div`
  content: ' ';
  position: absolute;
  top: ${Layout.RUNE_BORDER_WIDTH * -6}px;
  left: ${Layout.RUNE_BORDER_WIDTH * -6}px;
  right: ${Layout.RUNE_BORDER_WIDTH * -6}px;
  bottom: ${Layout.RUNE_BORDER_WIDTH * -6}px;
  border-radius: ${(props) => (props.keystone ? Layout.RUNE_SIZE_KS : Layout.RUNE_SIZE_REG)}px;
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
S.Spark = styled.img`
  display: ${(props) => (props.active ? '' : 'none')};
  position: absolute;
  top: -4px;
  left: -4px;

  width: ${(props) => (props.keystone ? Layout.RUNE_SIZE_KS : Layout.RUNE_SIZE_REG) + 8}px;

  animation: ${S.spin} 2s linear infinite;
`

function Rune(props) {
  return (
    <div>
      <S.Rune color={props.color} keystone={props.keystone} active={props.active}>
        <S.Spark src={spark} keystone={props.keystone} active={props.active} />
        <img className="graphic" alt={props.keystone ? 'keystone' : 'rune'} src={props.img} />
        <S.Highlighter color={props.color} />
      </S.Rune>
    </div>
  )
}

export default Rune
