import React from 'react'
import styled from '@emotion/styled'
import Layout from '../constants/layoutConstants'

const TopBar = styled.div`
  background-color: #222;
  height: ${Layout.HEADER_HEIGHT}px;
  padding: 20px;
  color: #fff;
  text-align: center;
  position: fixed;
  width: 100vw;
  box-sizing: border-box;

  .redux-logo {
    height: 80px;
  }
`

function Header() {
  return (
    <TopBar>
      <h2>Rune Page</h2>
    </TopBar>
  )
}

export default Header
