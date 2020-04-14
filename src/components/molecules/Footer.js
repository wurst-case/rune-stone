import React from 'react'
import styled from '@emotion/styled'

import Layout from '../../constants/layoutConstants'

const S = {}
S.Footer = styled.div`
  min-height: 60px;
  width: 100vw;
  padding: 16px;
  box-sizing: border-box;
  background-color: ${Layout.DARK};

  p {
    text-align: center;
    font-size: 0.75rem;
    color: white;
  }
`

function Footer() {
  return (
    <S.Footer>
      <p>
        Rune-Stone.com isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone
        officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties
        are trademarks or registered trademarks of Riot Games, Inc.
      </p>
    </S.Footer>
  )
}

export default Footer
