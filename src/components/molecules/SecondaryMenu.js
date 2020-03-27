import React from 'react'
import styled from '@emotion/styled'
import MenuRune from '../atoms/MenuRune'
import FlavorMenuRune from '../atoms/FlavorMenuRune'
import flavors from '../../constants/assetsMap'

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
  width: 300px;

  /* DEV PURPOSES ONLY */
  /* background-color: #222; */
`

S.TierTitle = styled.div`
  display: ${(props) => (props.open ? 'none' : '')};

  margin: 2px;
  height: 100px;
  width: 200px;
`

function SecondaryMenu(props) {
  return (
    <S.Menus>
      <S.Menu open>
        {flavors.map((flavor, id) => {
          //add "picked" logic
          return <FlavorMenuRune img={flavor.src} onClick={props.onSelectFlavor} id={id} key={'sflavor' + id} />
        })}
      </S.Menu>
      <S.Menu open>
        {props.flavor.tier1.map((rune, id) => (
          //TODO: add "disabled" logic
          <MenuRune color={props.color} img={rune.src} onClick={props.onSelectT1} id={id} key={'t1' + id} />
        ))}
      </S.Menu>
      <S.Menu open>
        {props.flavor.tier2.map((rune, id) => (
          //TODO: add "disabled" logic
          <MenuRune color={props.color} img={rune.src} onClick={props.onSelectT2} id={id} key={'t1' + id} />
        ))}
      </S.Menu>
    </S.Menus>
  )
}

export default SecondaryMenu
