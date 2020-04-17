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
    padding-top: 30px;
  }

  & > h4 {
    text-transform: uppercase;
    font-size: 0.9rem;
    margin-bottom: 8px;
    margin-top: 0;
    color: rgba(${(props) => props.color}, 1);
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  }

  & > p {
    font-size: 0.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  }
`

function SecondaryMenu({ openMenus, color, onSelectFlavor, flavor, onSelectRunes, t1, runes, t2, primeFlavor, index }) {
  var runeMatrix = []
  runes.forEach((row, rowNumber) =>
    runeMatrix.push(
      <S.Menu open={openMenus.RUNES} key={'secondaryRuneMenuRow' + rowNumber}>
        {row.map((rune, id) => {
          var disabled =
            (index[0][0] === rowNumber && index[0][1] !== id) || (index[1][0] === rowNumber && index[1][1] !== id)

          return (
            <MenuRune
              color={color}
              img={rune.src}
              title={rune.name}
              description={rune.detail}
              onClick={() => onSelectRunes(rowNumber, id)}
              key={'secondary' + rowNumber + '-' + id}
              disabled={disabled}
            />
          )
        })}
      </S.Menu>,
    ),
  )
  return (
    <S.Menus>
      <S.Menu open={openMenus.FLAVOR} className="flavors">
        {flavors.map((rune, id) => {
          if (rune.name !== primeFlavor.name && id !== 0)
            return (
              <FlavorMenuRune
                img={rune.src}
                onClick={() => onSelectFlavor(id)}
                key={'secondflavor' + id}
                picked={flavor ? rune.name === flavor.name : null}
              />
            )
          else return <div key={'secondflavors' + id}></div>
        })}
      </S.Menu>
      <S.Description open={openMenus.FLAVOR} color={color}>
        <h4>{flavor ? flavor.name : 'Choose a path.'}</h4>
        {flavor === 0 ? (
          <p>
            {flavor.subtitle}
            <br />
            {flavor.detail}
          </p>
        ) : (
          <p>Select a secondary path</p>
        )}
      </S.Description>
      {runeMatrix}
      <S.Description open={openMenus.RUNES} color={color} className="first">
        <h4>{t1 ? t1.name : 'Secondary'}</h4>
        {t1 ? (
          // Strip away all html tags from description
          <p className="description">{t1.detail.replace(/<\/?[^>]+(>|$)/g, '')}</p>
        ) : (
          <p className="description">Select two runes from your secondary path</p>
        )}
      </S.Description>
      <S.Description open={openMenus.RUNES} color={color}>
        <h4>{t2 ? t2.name : 'Secondary'}</h4>
        {t2 ? (
          // Strip away all html tags from description
          <p className="description">{t2.detail.replace(/<\/?[^>]+(>|$)/g, '')}</p>
        ) : (
          <p className="description">Select two runes from your secondary path</p>
        )}
      </S.Description>
    </S.Menus>
  )
}

export default SecondaryMenu
