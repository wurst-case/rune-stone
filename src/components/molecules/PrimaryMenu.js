import React from 'react'
import styled from '@emotion/styled'

const S = {}
S.Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin: 8px;

  h4,
  p {
    margin: 0;
    font-size: 1rem;
  }

  p {
    font-size: 0.8rem;
  }
`

function PrimaryMenu(props) {
  return (
    <S.Menu>
      <h4>Domination</h4>
      <p>Hunt and eliminate prey</p>
      <p>Burst damage and target access</p>
    </S.Menu>
  )
}

export default PrimaryMenu
