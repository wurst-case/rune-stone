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

  .highlighter {
    content: ' ';
    position: absolute;
    pointer-events: none;
    top: ${Layout.RUNE_BORDER_WIDTH * -6}px;
    left: ${Layout.RUNE_BORDER_WIDTH * -6}px;
    right: ${Layout.RUNE_BORDER_WIDTH * -6}px;
    bottom: ${Layout.RUNE_BORDER_WIDTH * -6}px;
    border-radius: ${Layout.RUNE_SIZE_MENU}px;
    border: ${Layout.RUNE_BORDER_WIDTH * 1.5}px solid rgba(${(props) => props.color}, 0);
    transition: border ${Layout.ATTACK}, top ${Layout.ATTACK}, left ${Layout.ATTACK}, right ${Layout.ATTACK},
      bottom ${Layout.ATTACK};
  }

  &:hover {
    .highlighter {
      top: ${Layout.RUNE_BORDER_WIDTH * -4}px;
      left: ${Layout.RUNE_BORDER_WIDTH * -4}px;
      right: ${Layout.RUNE_BORDER_WIDTH * -4}px;
      bottom: ${Layout.RUNE_BORDER_WIDTH * -4}px;
      border: ${Layout.RUNE_BORDER_WIDTH * 1.5}px solid rgba(${(props) => props.color}, 0.5);
    }
  }
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
    margin-bottom: ${(props) => (props.keystone ? '' : '8px')};
    margin-top: ${(props) => (props.keystone ? '8px' : '')};
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
    bottom: ${(props) => (props.keystone ? '100%' : '')};
    top: ${(props) => (props.keystone ? '' : '100%')};
    left: 50%;
    margin-left: -8px;
    border-width: 8px;
    border-style: solid;
    border-color: ${(props) => (props.keystone ? 'transparent' : Layout.BRONZE)} transparent
      ${(props) => (props.keystone ? Layout.BRONZE : 'transparent')} transparent;
  }
  @media only screen and (min-width: 1100px) {
    &:hover .tooltiptext {
      visibility: visible;
    }
  }
`

function Rune({ color, keystone, disabled, onClick, img, title, description }) {
  return (
    <S.Tooltip keystone={keystone}>
      <S.Rune
        color={color}
        keystone={keystone}
        disabled={disabled}
        onClick={(_) => (onClick ? onClick() : console.log())}
      >
        <img alt="rune" src={img} />
        <div className="highlighter" />
      </S.Rune>
      <div className="tooltiptext">
        <h4>{title}</h4>
        <ReactMarkdown source={description} escapeHtml={false} skipHtml={false} />
      </div>
    </S.Tooltip>
  )
}

export default Rune
