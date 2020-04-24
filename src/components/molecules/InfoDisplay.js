import React from 'react'
import styled from '@emotion/styled'
import ReactMarkdown from 'react-markdown/with-html'

import CloseIcon from '@material-ui/icons/Close'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

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

  #icon {
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

  #detail,
  p {
    text-align: left;
    align-self: flex-start;
    font-size: 0.8rem;
  }

  .iconWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.01);
    height: 64px;
    width: 64px;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`

const InfoDisplay = ({ runeInfo, onClose, onPick, open }) => {
  var rune = runeInfo && runeInfo.rune
  var color = runeInfo && runeInfo.color
  return (
    <S.Display open={open} color={color}>
      <div onClick={onClose} />
      <div className="buttons">
        <div className="iconWrapper" id="close">
          <CloseIcon id="icon" onClick={onClose} />
        </div>
        <div className="iconWrapper" id="pick">
          <CheckCircleIcon id="icon" onClick={() => onPick(runeInfo.primary, runeInfo.tier, runeInfo.id)} />
        </div>
      </div>
      <Rune keystone color={color} img={rune && rune.img} />
      <h2>{rune && rune.name}</h2>
      <ReactMarkdown source={rune && rune.detail} escapeHtml={false} skipHtml={false} id="detail" />
    </S.Display>
  )
}

export default InfoDisplay
