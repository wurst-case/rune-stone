import React from 'react'
import styled from '@emotion/styled'
import Layout from '../constants/layoutConstants'

const S = {}
S.Header = styled.div`
  background-color: ${Layout.BRONZE};
  padding: 16px;
  color: rgba(${Layout.GOLD}, 1);
  text-align: center;
  width: 15vw;
  height: 100vh;
  box-sizing: border-box;

  h1,
  h4 {
    background-color: rgba(${Layout.GOLD}, 1);
    color: transparent;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
  }

  h1,
  h4 {
    margin: 0;
    margin-top: 8px;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`

function Header() {
  return (
    <S.Header>
      {/* <h1>Rune Stone</h1>
      <h5>Build your own paths or experiment with ones made by the community.</h5> */}
    </S.Header>
  )
}

export default Header
