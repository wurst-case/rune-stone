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
  height: 80px;
  width: 300px;

  &.flavors {
    padding-top: 10px;
  }
`

S.Description = styled.div`
  display: ${(props) => (props.open ? 'none' : '')};

  margin: 2px;
  height: 100px;
  width: 300px;

  text-align: left;

  &.first {
    margin-top: 40px;
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

function SecondaryMenu({ openMenus, color, onSelectFlavor, flavor, onSelectRunes, t1, runes, t2, primeFlavor }) {
  var runeMatrix = []
  runes.forEach((row, rowNumber) =>
    runeMatrix.push(
      <S.Menu open={openMenus.T1 || openMenus.T2}>
        {row.map((rune, id) => (
          <MenuRune
            color={color}
            img={rune.src}
            title={rune.name}
            description={rune.details}
            onClick={() => onSelectRunes(rowNumber, id)}
            key={'secondary' + row + ',' + id}
            // disabled={t1 ? rune.name !== t1.name : false}
          />
        ))}
      </S.Menu>,
    ),
  )
  return (
    <S.Menus>
      <S.Menu open className="flavors">
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
      {runeMatrix}
      <S.Description open={openMenus.T1 || openMenus.T2} color={color} className="first">
        <h4>Secondary</h4>
        <p>{t1 ? t1.details : `Select two runes from your secondary path`}</p>
      </S.Description>
      <S.Description open={openMenus.T1 || openMenus.T2} color={color}>
        <h4>Secondary</h4>
        <p>{t2 ? t2.details : `Select two runes from your secondary path`}</p>
      </S.Description>
    </S.Menus>
  )
}

export default SecondaryMenu
