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
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
`

function PrimaryMenu({ openMenus, color, onSelectFlavor, flavor, onSelectT1, t1, onSelectT2, t2, primeFlavor }) {
  return (
    <S.Menus>
      <S.Menu open>
        {flavors.map((rune, id) => {
          if (rune.name !== primeFlavor.name && id !== 0)
            return (
              <FlavorMenuRune
                img={rune.src}
                onClick={flavor ? (rune.name === flavor.name ? () => {} : onSelectFlavor) : onSelectFlavor}
                id={id}
                key={'secondflavor' + id}
                picked={flavor ? rune.name === flavor.name : null}
              />
            )
          else return <></>
        })}
      </S.Menu>
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
        <h4>{t1 ? t1.name : flavor.tierNames[0]}</h4>
        <p>{t1 ? t1.details : `Select a rune`}</p>
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
        <h4>{t2 ? t2.name : flavor.tierNames[1]}</h4>
        <p>{t2 ? t2.details : `Select a rune`}</p>
      </S.Description>
    </S.Menus>
  )
}

export default PrimaryMenu
