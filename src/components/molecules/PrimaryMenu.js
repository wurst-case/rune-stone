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
        {flavors.map((flavor, id) => {
          //add "picked" logic
          return <FlavorMenuRune img={flavor.src} onClick={props.onClick} id={id} />
        })}
      </S.Menu>
      <S.TierTitle open>
        <h4>Domination</h4>
      </S.TierTitle>
      <S.Menu open>
        {props.flavor.keystones.map((keystone) => (
          //TODO: add "disabled" logic
          <MenuRune keystone color={props.color} img={keystone.src} />
        ))}
      </S.Menu>
      <S.Menu open>
        {props.flavor.tier1.map((rune) => (
          //TODO: add "disabled" logic
          <MenuRune color={props.color} img={rune.src} />
        ))}
      </S.Menu>
      <S.Menu open>
        {props.flavor.tier2.map((rune) => (
          //TODO: add "disabled" logic
          <MenuRune color={props.color} img={rune.src} />
        ))}
      </S.Menu>
      <S.Menu open>
        {props.flavor.tier3.map((rune) => (
          //TODO: add "disabled" logic
          <MenuRune color={props.color} img={rune.src} />
        ))}
      </S.Menu>
    </S.Menus>
  )
}

export default PrimaryMenu
