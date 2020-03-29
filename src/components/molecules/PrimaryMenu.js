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

S.Description = styled.div`
  display: ${(props) => (props.open ? 'none' : '')};

  margin: 2px;
  height: 100px;
  width: 300px;

  text-align: left;

  & > h4 {
    margin-bottom: 8px;
    margin-top: 0;
    color: rgba(${(props) => props.color}, 1);
  }

  & > p {
    font-size: 0.8rem;
  }
`

function PrimaryMenu({
  openMenus,
  color,
  onSelectFlavor,
  flavor,
  onSelectKeystone,
  keystone,
  onSelectT1,
  t1,
  onSelectT2,
  t2,
  onSelectT3,
  t3,
}) {
  return (
    <S.Menus>
      <S.Menu open>
        {flavors.map((rune, id) => {
          //add "picked" logic
          return (
            <FlavorMenuRune
              img={rune.src}
              onClick={flavor ? (rune.name === flavor.name ? () => {} : onSelectFlavor) : onSelectFlavor}
              id={id}
              key={'primeflavor' + id}
            />
          )
        })}
      </S.Menu>
      <S.Menu open={openMenus.KEYSTONE}>
        {flavor.keystones.map((rune, id) => (
          //TODO: add "disabled" logic
          <MenuRune
            keystone
            color={color}
            img={rune.src}
            onClick={onSelectKeystone}
            id={id}
            key={'keystone' + id}
            disabled={keystone ? rune.name !== keystone.name : false}
          />
        ))}
      </S.Menu>
      <S.Description open={openMenus.KEYSTONE} color={color}>
        <h4>{keystone ? keystone.name : 'Keystone'}</h4>
        <p>{keystone ? keystone.details : `Select a keystone.`}</p>
      </S.Description>
      <S.Menu open={openMenus.T1}>
        {flavor.tier1.map((rune, id) => (
          //TODO: add "disabled" logic
          <MenuRune
            color={color}
            img={rune.src}
            onClick={onSelectT1}
            id={id}
            key={'t1' + id}
            disabled={t1 ? rune.name !== t1.name : false}
          />
        ))}
      </S.Menu>
      <S.Description open={openMenus.T1} color={color}>
        <h4>{t1 ? t1.name : 't1'}</h4>
        <p>{t1 ? t1.details : `Select a rune.`}</p>
      </S.Description>
      <S.Menu open={openMenus.T2}>
        {flavor.tier2.map((rune, id) => (
          //TODO: add "disabled" logic
          <MenuRune
            color={color}
            img={rune.src}
            onClick={onSelectT2}
            id={id}
            key={'t2' + id}
            disabled={t2 ? rune.name !== t2.name : false}
          />
        ))}
      </S.Menu>
      <S.Description open={openMenus.T2} color={color}>
        <h4>{t2 ? t2.name : 't2'}</h4>
        <p>{t2 ? t2.details : `Select a rune.`}</p>
      </S.Description>
      <S.Menu open={openMenus.T3}>
        {flavor.tier3.map((rune, id) => (
          //TODO: add "disabled" logic
          <MenuRune
            color={color}
            img={rune.src}
            onClick={onSelectT3}
            id={id}
            key={'t3' + id}
            disabled={t3 ? rune.name !== t3.name : false}
          />
        ))}
      </S.Menu>
      <S.Description open={openMenus.T3} color={color}>
        <h4>{t3 ? t3.name : 't3'}</h4>
        <p>{t3 ? t3.details : `Select a rune.`}</p>
      </S.Description>
    </S.Menus>
  )
}

export default PrimaryMenu
