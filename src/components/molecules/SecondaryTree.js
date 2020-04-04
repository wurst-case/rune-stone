import React from 'react'
import styled from '@emotion/styled'
import Rune from '../atoms/Rune'
import Branch from '../atoms/Branch'
import FlavorRune from '../atoms/FlavorRune'

const S = {}
S.Tree = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 24px;
`

function PrimaryTree(props) {
  let { color, t1, t2, onToggle, openMenus } = props
  return (
    <S.Tree>
      <FlavorRune color={props.color} onClick={() => onToggle({ tier: 'FLAVOR' })} active={openMenus.FLAVOR} />
      <Branch color={props.color} padding={4} active={openMenus.RUNES} />
      <Rune
        color={color}
        img={t1 ? t1.src : null}
        onClick={() => onToggle({ tier: 'RUNES' })}
        active={openMenus.RUNES}
      />
      <Branch color={color} active={openMenus.RUNES} />
      <Rune
        color={color}
        img={t2 ? t2.src : null}
        onClick={() => onToggle({ tier: 'RUNES' })}
        active={openMenus.RUNES}
      />
    </S.Tree>
  )
}

export default PrimaryTree
