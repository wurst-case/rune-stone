import React from 'react'
import styled from '@emotion/styled'
import Rune from '../atoms/Rune'
import Branch from '../atoms/Branch'
import SecondFlavorRune from '../atoms/SecondFlavorRune'

const S = {}
S.Tree = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 24px;
`

function PrimaryTree({ color, t1, t2, onToggle, openMenus, slotMachine, triggerSlot, icon }) {
  if (document.getElementById('swirl' + color)) {
    document.getElementById('swirl' + color).style.stopColor = 'rgba(' + color + ',1)'
    console.log(document.getElementById('swirl' + color).style.stopColor)
  }
  return (
    <S.Tree>
      <SecondFlavorRune
        color={color}
        onClick={() => onToggle({ tier: 'FLAVOR' })}
        active={openMenus.FLAVOR}
        icon={icon}
      />
      <Branch color={color} padding={4} active={openMenus.RUNES} />
      <Rune
        color={color}
        img={t1 ? t1.img : null}
        onClick={() => onToggle({ tier: 'RUNES' })}
        active={openMenus.RUNES}
        title={t1 && t1.name}
        description={t1 && t1.detail}
      />
      <Branch color={color} active={openMenus.RUNES} />
      <Rune
        color={color}
        img={
          t2 && t2.name === 'Zim’s Magical Rune Randomization Machine' && slotMachine
            ? slotMachine.img
            : t2
            ? t2.img
            : null
        }
        onClick={() => onToggle({ tier: 'RUNES' })}
        active={openMenus.RUNES}
        slotMachine={t2 && t2.name === 'Zim’s Magical Rune Randomization Machine'}
        triggerSlot={triggerSlot}
        title={t1 && t1.name}
        description={t1 && t1.detail}
      />
    </S.Tree>
  )
}

export default PrimaryTree
