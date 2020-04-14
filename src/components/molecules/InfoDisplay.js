import React from 'react'
import styled from '@emotion/styled'
import ReactMarkdown from 'react-markdown/with-html'

import CloseIcon from '@material-ui/icons/Close'

import Layout from '../../constants/layoutConstants'
import Rune from '../atoms/Rune'

const S = {}
S.Display = styled.div`
  position: fixed;
  top: 0;
  display: ${(props) => (props.open ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: Calc(100vw - 12vw);
  height: Calc(100vh - 12vh);
  outline: 8vh solid rgba(0, 0, 0, 0.5);
  margin: 6vh 6vw;
  border: 1px solid ${Layout.BRONZE};
  z-index: 1000;
  box-sizing: border-box;

  background-color: ${Layout.DARK};
  padding: 16px;

  #close {
    align-self: flex-end;
    margin: 16px;
  }

  h2 {
    text-transform: uppercase;
    font-family: 'Beaufort W01 Bold1339640';
    font-size: 2rem;
    margin: 24px 0;
    color: rgba(${(props) => props.color}, 1);
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  }

  #details,
  p {
    text-align: left;
    align-self: flex-start;
    font-size: 0.8rem;
  }
`
//not working
S.ClickPreventer = styled.div`
  pointer-events: none;
  width: 100vw;
  height: 100vh;
  color: red;
  position: fixed;
  top: 0;
  /* z-index: 999; */
`

const InfoDisplay = ({ color, rune, onClose, open }) => {
  return (
    <S.Display open={open} color={color}>
      <S.ClickPreventer />
      <CloseIcon id="close" onClick={onClose} />
      <Rune keystone color={color} img={rune && rune.src} />
      <h2>{rune && rune.name}</h2>
      <ReactMarkdown source={rune && rune.details} escapeHtml={false} skipHtml={false} id="details" />
    </S.Display>
  )
}

export default InfoDisplay