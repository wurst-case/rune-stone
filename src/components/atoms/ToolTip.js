import React from 'react'
import styled from '@emotion/styled'
import Layout from '../../constants/layoutConstants.js'

const S = {}
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
      text-transform: uppercase;
      font-size: 0.9rem;
    }

    p,
    ul,
    li {
      font-size: 0.75rem;
      font-family: 'Beaufort W01 Bold1339640';
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

function ToolTip() {
  return <S.ToolTip></S.ToolTip>
}

export default ToolTip
