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

function PrimaryTree({ color, keystone, t1, t2, t3, onToggle, openMenus, slotMachine, triggerSlot }) {
  return (
    <S.Tree>
      <FlavorRune color={color} onClick={() => onToggle({ tier: 'FLAVOR' })} />
      <Branch color={color} padding={4} active={openMenus.KEYSTONE || openMenus.T1 || openMenus.T2 || openMenus.T3} />
      <Rune
        color={color}
        keystone
        img={keystone ? keystone.img : null}
        onClick={() => onToggle({ tier: 'KEYSTONE' })}
        active={openMenus.KEYSTONE}
      />
      <Branch color={color} padding={-16} onClick={onToggle} active={openMenus.T1 || openMenus.T2 || openMenus.T3} />
      <Rune color={color} img={t1 ? t1.img : null} onClick={() => onToggle({ tier: 'T1' })} active={openMenus.T1} />
      <Branch color={color} active={openMenus.T2 || openMenus.T3} />
      <Rune color={color} img={t2 ? t2.img : null} onClick={() => onToggle({ tier: 'T2' })} active={openMenus.T2} />
      <Branch color={color} active={openMenus.T3} />
      <Rune
        color={color}
        img={
          t3 && t3.name === 'Zim’s Magical Rune Randomization Machine' && slotMachine
            ? slotMachine.img
            : t3
            ? t3.img
            : null
        }
        onClick={() => onToggle({ tier: 'T3' })}
        active={openMenus.T3}
        slotMachine={t3 && t3.name === 'Zim’s Magical Rune Randomization Machine'}
        triggerSlot={triggerSlot}
      />
    </S.Tree>
  )
}

export default PrimaryTree
