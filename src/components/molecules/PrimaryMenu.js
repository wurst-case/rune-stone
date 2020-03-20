import React from 'react'
import styled from '@emotion/styled'
import MenuRune from '../atoms/MenuRune'
import FlavorMenuRune from '../atoms/FlavorMenuRune'
import ability from '../../assets/domination/t1/cheap-shot.webp'
import ks from '../../assets/domination/keystones/electrocute.webp'
import flavor from '../../assets/domination/domination.png'
import Layout from '../../constants/layoutConstants'

const S = {}
S.Menus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin: 8px;
`
S.Menu = styled.div`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  margin: 2px;
  height: 100px;
  width: 200px;

  /* DEV PURPOSES ONLY */
  background-color: #222;
`
S.TierTitle = styled.div`
  display: ${(props) => (props.open ? 'none' : '')};

  margin: 2px;
  height: 100px;
  width: 200px;
`

function PrimaryMenu(props) {
  return (
    <S.Menus>
      <S.Menu open>
        <FlavorMenuRune img={flavor} />
        <FlavorMenuRune picked img={flavor} />
        <FlavorMenuRune img={flavor} />
        <FlavorMenuRune img={flavor} />
      </S.Menu>
      <S.TierTitle open>
        <h4>Domination</h4>
      </S.TierTitle>
      <S.Menu open>
        <MenuRune color={Layout.BANDLE_RGB} img={ks} keystone />
        <MenuRune color={Layout.BANDLE_RGB} img={ks} keystone disabled />
        <MenuRune color={Layout.BANDLE_RGB} img={ks} keystone disabled />
        <MenuRune color={Layout.BANDLE_RGB} img={ks} keystone disabled />
      </S.Menu>
      <S.Menu open>
        <MenuRune color={Layout.BANDLE_RGB} img={ability} disabled />
        <MenuRune color={Layout.BANDLE_RGB} img={ability} disabled />
        <MenuRune color={Layout.BANDLE_RGB} img={ability} />
      </S.Menu>
      <S.Menu open>
        <MenuRune color={Layout.BANDLE_RGB} img={ability} disabled />
        <MenuRune color={Layout.BANDLE_RGB} img={ability} />
        <MenuRune color={Layout.BANDLE_RGB} img={ability} disabled />
      </S.Menu>
      <S.Menu open>
        <MenuRune color={Layout.BANDLE_RGB} img={ability} />
        <MenuRune color={Layout.BANDLE_RGB} img={ability} />
        <MenuRune color={Layout.BANDLE_RGB} img={ability} />
      </S.Menu>
    </S.Menus>
  )
}

export default PrimaryMenu
