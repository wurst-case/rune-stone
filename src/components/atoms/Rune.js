import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import ReactMarkdown from 'react-markdown/with-html'
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

S.pull = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-3239deg);
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

  border-radius: 1000px;
  border: ${Layout.RUNE_BORDER_WIDTH}px solid rgba(${(props) => props.color}, 1);

  & > img.graphic {
    /* Image size larger proportionally if keystone rune by 75% and active runes decrease image sixe by 20%*/
    width: ${(props) =>
      (props.keystone ? Layout.RUNE_SIZE_KS * 1.75 : Layout.RUNE_SIZE_REG) * (props.active ? 0.8 : 1)}px;
    border-radius: 1000px;
  }

  .animation {
    /* animation: ${S.pull} ${(props) => (props.slotMachine && props.active ? 2 : 0)}s linear infinite; */
    width: ${(props) =>
      (props.keystone ? Layout.RUNE_SIZE_KS * 1.75 : Layout.RUNE_SIZE_REG) * (props.active ? 0.8 : 1)}px;
    animation: ${S.pull} 5s ease-out;
    border-radius: 1000px;
  }

  .highlighter{
  content: ' ';
  position: absolute;
  pointer-events: none;
  top: ${Layout.RUNE_BORDER_WIDTH * -6}px;
  left: ${Layout.RUNE_BORDER_WIDTH * -6}px;
  right: ${Layout.RUNE_BORDER_WIDTH * -6}px;
  bottom: ${Layout.RUNE_BORDER_WIDTH * -6}px;
  border-radius: ${(props) => (props.keystone ? Layout.RUNE_SIZE_KS : Layout.RUNE_SIZE_REG)}px;
  border: ${Layout.RUNE_BORDER_WIDTH * 1.5}px solid rgba(${(props) => props.color}, 0);
  transition: border ${Layout.ATTACK}, top ${Layout.ATTACK}, left ${Layout.ATTACK}, right ${Layout.ATTACK},
    bottom ${Layout.ATTACK};
  }

  &:hover {
    .highlighter{
    top: ${Layout.RUNE_BORDER_WIDTH * -4}px;
    left: ${Layout.RUNE_BORDER_WIDTH * -4}px;
    right: ${Layout.RUNE_BORDER_WIDTH * -4}px;
    bottom: ${Layout.RUNE_BORDER_WIDTH * -4}px;
    border: ${Layout.RUNE_BORDER_WIDTH * 1.5}px solid rgba(${(props) => props.color}, 0.5);
    }
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

S.Glow = styled.div`
  display: ${(props) => (props.glow ? 'flex' : 'none')};
  z-index: 1001;
  position: absolute;
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
  border-radius: 1000px;
  width: ${Layout.RUNE_SIZE_REG}px;
  height: ${Layout.RUNE_SIZE_REG}px;
  box-shadow: 0 0 20px 20px rgba(${(props) => props.color}, 0.25);
  box-sizing: border-box;
  background: transparent;
`

S.Tooltip = styled.div`
  position: relative;
  list-style-position: inside;

  & .tooltiptext {
    visibility: hidden;
    width: 250px;
    background-color: ${Layout.DARK};
    text-align: left;
    border-radius: 6px;
    padding: 16px 24px;
    margin-bottom: ${(props) => (props.keystone ? '' : '-8px')};
    margin-top: ${(props) => (props.keystone ? '-8px' : '')};
    box-sizing: border-box;
    position: absolute;
    z-index: 100;
    bottom: ${(props) => (props.keystone ? '' : '150%')};
    top: ${(props) => (props.keystone ? '150%' : '')};
    left: 50%;
    margin-left: -125px;
    border: 2px solid ${Layout.BRONZE};

    h4 {
      color: rgba(${Layout.GOLD});
      margin: 0;
      text-transform: uppercase;
      font-size: 0.9rem;
    }

    ul {
      list-style-position: inside;
    }

    p,
    ul,
    li {
      font-size: 0.75rem;
      line-height: 1rem;
    }
  }

  & .tooltiptext::after {
    content: '';
    position: absolute;
    top: ${(props) => (props.keystone ? '' : '100%')};
    bottom: ${(props) => (props.keystone ? '100%' : '')};
    left: 50%;
    margin-left: -8px;
    border-width: 8px;
    border-style: solid;
    border-color: ${(props) => (props.keystone ? 'transparent' : Layout.BRONZE)} transparent
      ${(props) => (props.keystone ? Layout.BRONZE : 'transparent')} transparent;
  }
  @media only screen and (min-width: 1100px) {
    &:hover .tooltiptext {
      visibility: ${(props) => (props.empty ? 'hidden' : 'visible')};
    }
  }
`

function Rune({
  color,
  keystone,
  glow,
  active,
  onClick,
  img,
  slotMachine,
  triggerSlot,
  title,
  description,
  resetSlotMachine,
}) {
  return (
    <S.Tooltip empty={!title && !description && true} keystone={keystone}>
      <S.Rune color={color} keystone={keystone} active={active} onClick={onClick}>
        <S.Spark src={spark} keystone={keystone} active={active} alt="active spark" />
        {img ? (
          <img
            className={triggerSlot && slotMachine && !active ? 'animation' : 'graphic'}
            alt={keystone ? 'keystone' : 'rune'}
            src={img}
            onAnimationEnd={() => (triggerSlot ? triggerSlot() : console.log('no trigger'))}
            onAnimationStart={() => (resetSlotMachine ? resetSlotMachine() : console.log(''))}
          />
        ) : (
          <div />
        )}
        <div className="highlighter" />
        <S.Glow glow={glow} color={color} />
      </S.Rune>
      <div className="tooltiptext">
        <h4>{title}</h4>
        <ReactMarkdown source={description} escapeHtml={false} skipHtml={false} />
      </div>
    </S.Tooltip>
  )
}

export default Rune
