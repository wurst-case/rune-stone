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
`

S.Description = styled.div`
  display: ${(props) => (props.open ? 'none' : '')};

  margin: 2px;
  height: 100px;
  width: 300px;

  text-align: left;

  &.flavors {
    padding-top: 30px;
  }

  & > h4 {
    margin-bottom: 8px;
    margin-top: 0;
    color: rgba(${(props) => props.color}, 1);
  }

  & > p {
    font-size: 0.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
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
      <S.Menu open className="flavors">
        {flavors.map((rune, id) => {
          if (id !== 0)
            return (
              <FlavorMenuRune
                img={rune.src}
                onClick={flavor ? (rune.name === flavor.name ? () => {} : onSelectFlavor) : onSelectFlavor}
                id={id}
                key={'primeflavor' + id}
                picked={rune.name === flavor.name}
              />
            )
          else return <></>
        })}
      </S.Menu>
      <S.Menu open={openMenus.KEYSTONE}>
        {flavor.keystones.map((rune, id) => (
          <MenuRune
            keystone
            color={color}
            img={rune.src}
            onClick={() => onSelectKeystone(id)}
            key={'keystone' + id}
            disabled={keystone ? rune.name !== keystone.name : false}
          />
        ))}
      </S.Menu>
      <S.Description open={openMenus.KEYSTONE} color={color}>
        <h4>{keystone ? keystone.name : 'Keystone'}</h4>
        <p>{keystone ? keystone.details : `Select a keystone`}</p>
      </S.Description>
      <S.Menu open={openMenus.T1}>
        {flavor.tier1.map((rune, id) => (
          <MenuRune
            color={color}
            img={rune.src}
            onClick={() => onSelectT1(id)}
            key={'t1' + id}
            disabled={t1 ? rune.name !== t1.name : false}
          />
        ))}
      </S.Menu>
      <S.Description open={openMenus.T1} color={color}>
        <h4>{t1 ? t1.name : flavor.tierNames[0]}</h4>
        <p>{t1 ? t1.details : `Select a rune`}</p>
      </S.Description>
      <S.Menu open={openMenus.T2}>
        {flavor.tier2.map((rune, id) => (
          <MenuRune
            color={color}
            img={rune.src}
            onClick={() => onSelectT2(id)}
            key={'t2' + id}
            disabled={t2 ? rune.name !== t2.name : false}
          />
        ))}
      </S.Menu>
      <S.Description open={openMenus.T2} color={color}>
        <h4>{t2 ? t2.name : flavor.tierNames[1]}</h4>
        <p>{t2 ? t2.details : `Select a rune`}</p>
      </S.Description>
      <S.Menu open={openMenus.T3}>
        {flavor.tier3.map((rune, id) => (
          <MenuRune
            color={color}
            img={rune.src}
            onClick={() => onSelectT3(id)}
            key={'t3' + id}
            disabled={t3 ? rune.name !== t3.name : false}
          />
        ))}
      </S.Menu>
      <S.Description open={openMenus.T3} color={color}>
        <h4>{t3 ? t3.name : flavor.tierNames[2]}</h4>
        <p>{t3 ? t3.details : `Select a rune`}</p>
      </S.Description>
    </S.Menus>
  )
}

export default PrimaryMenu
