import React from 'react'
import styled from '@emotion/styled'
import Layout from '../../constants/layoutConstants'
import ReactMarkdown from 'react-markdown/with-html'

const S = {}

S.Rune = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

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

    & > div {
      display: flex;
    }
  }

  & > img {
    /* Image size larger proportionally if keystone rune by 75% and active runes decrease image sixe by 20%*/
    width: ${(props) => Layout.RUNE_SIZE_MENU * (props.keystone ? 1.75 : 1) * (props.active ? 0.8 : 1)}px;
    filter: ${(props) => (props.disabled ? 'gray brightness(0.5) contrast(75%)' : 'none')};
    -webkit-filter: ${(props) => (props.disabled ? 'grayscale(1) brightness(0.5) contrast(75%)' : 'none')};
    filter: ${(props) => (props.disabled ? 'grayscale(1) brightness(0.5) contrast(75%)' : 'none')};
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

S.Tooltip = styled.div`
  position: relative;

  & .tooltiptext {
    visibility: hidden;
    width: 300px;
    background-color: ${Layout.DARK};
    text-align: left;
    border-radius: 6px;
    padding: 16px;
    margin-bottom: 8px;
    box-sizing: border-box;
    position: absolute;
    z-index: 100;
    bottom: 150%;
    left: 50%;
    margin-left: -150px;
    border: 2px solid ${Layout.BRONZE};

    h4 {
      color: rgba(${Layout.GOLD});
      margin: 0;
    }

    p {
      font-size: 0.75rem;
      color: white;
    }
  }

  & .tooltiptext::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -8px;
    border-width: 8px;
    border-style: solid;
    border-color: ${Layout.BRONZE} transparent transparent transparent;
  }

  &:hover .tooltiptext {
    visibility: visible;
  }
`

function Rune({ color, keystone, disabled, onClick, img, title, description }) {
  return (
    <S.Tooltip>
      <S.Rune color={color} keystone={keystone} disabled={disabled} onClick={(_) => onClick()}>
        <img alt="flavor" src={img} />
        <S.Highlighter color={color} />
      </S.Rune>
      <div className="tooltiptext">
        <h4>{title}</h4>
        <ReactMarkdown source={description} escapeHtml={false} skipHtml={false} />
      </div>
    </S.Tooltip>
  )
}

export default Rune
