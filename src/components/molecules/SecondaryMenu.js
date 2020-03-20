import React from 'react'
import styled from '@emotion/styled'
import MenuRune from '../atoms/MenuRune'
import FlavorMenuRune from '../atoms/FlavorMenuRune'
import ability from '../../assets/domination/t1/cheap-shot.webp'
import flavor from '../../assets/domination/domination.png'
import Layout from '../../constants/layoutConstants'

const S = {}
S.MenuTree = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin: 8px;
`
S.Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 100px;
  width: 200px;
`

function SecondaryMenu(props) {
  return (
    <S.MenuTree>
      <S.Menu>
        <FlavorMenuRune img={flavor} />
        <FlavorMenuRune picked img={flavor} />
        <FlavorMenuRune img={flavor} />
        <FlavorMenuRune img={flavor} />
      </S.Menu>
      <S.Menu>
        <MenuRune color={Layout.BANDLE_RGB} img={ability} />
        <MenuRune color={Layout.BANDLE_RGB} img={ability} disabled />
        <MenuRune color={Layout.BANDLE_RGB} img={ability} disabled />
        <MenuRune color={Layout.BANDLE_RGB} img={ability} disabled />
      </S.Menu>
      <S.Menu>
        <MenuRune color={Layout.BANDLE_RGB} img={ability} disabled />
        <MenuRune color={Layout.BANDLE_RGB} img={ability} disabled />
        <MenuRune color={Layout.BANDLE_RGB} img={ability} />
      </S.Menu>
    </S.MenuTree>
  )
}

export default SecondaryMenu
