import React from 'react'
import styled from '@emotion/styled'
import ReactMarkdown from 'react-markdown/with-html'
import MenuRune from '../atoms/MenuRune'
import FlavorMenuRune from '../atoms/FlavorMenuRune'

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
  min-width: 260px;

  &.flavor {
    padding-top: 15px;
    padding-bottom: 55px;
  }

  &.first {
    margin-top: -36px;
  }
`

S.Description = styled.div`
  display: ${(props) => (props.open ? 'none' : '')};

  margin: 2px;
  height: 110px;
  min-width: 260px;

  text-align: left;

  &.flavor {
    padding-top: 24px;
    padding-bottom: 16px;
  }

  & > h4 {
    text-transform: uppercase;
    font-size: 0.9rem;
    margin-bottom: 8px;
    margin-top: 0;
    color: rgba(${(props) => props.color}, 1);
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
    max-width: 250px;
  }

  & > p,
  .simpleTT {
    font-size: 0.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
    max-width: 250px;
    line-height: 1.2rem;
  }

  & > .simpleTT > p {
    margin: 3px 0;
  }
`

function SecondaryMenu({
  openMenus,
  color,
  onSelectFlavor,
  flavor,
  onSelectRunes,
  t1,
  runes,
  t2,
  primeFlavor,
  index,
  slotMachine,
  slotColor,
  paths,
}) {
  var runeMatrix = []
  runes &&
    runes.forEach((row, rowNumber) =>
      runeMatrix.push(
        <S.Menu
          open={openMenus.RUNES}
          key={'secondaryRuneMenuRow' + rowNumber}
          className={rowNumber === 0 ? 'first' : ''}
        >
          {row &&
            row.map((rune, id) => {
              var disabled =
                (index[0][0] === rowNumber && index[0][1] !== id) || (index[1][0] === rowNumber && index[1][1] !== id)

              return (
                <MenuRune
                  color={color}
                  img={rune.img}
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
  var altColor = null
  altColor = t2 && t2.name === 'Zim’s Magical Rune Randomization Machine' && slotMachine ? slotColor : color
  t2 = t2 && t2.name === 'Zim’s Magical Rune Randomization Machine' && slotMachine ? slotMachine : t2
  return (
    <S.Menus>
      <S.Menu open={openMenus.FLAVOR} className="flavor">
        {paths &&
          paths.map((rune, id) => {
            if (rune.name !== primeFlavor.name && id !== 0)
              return (
                <FlavorMenuRune
                  img={rune.img}
                  onClick={() => onSelectFlavor(id)}
                  key={'secondflavor' + id}
                  picked={flavor ? rune.name === flavor.name : null}
                />
              )
            else return <div key={'secondflavors' + id}></div>
          })}
      </S.Menu>
      <S.Description open={openMenus.FLAVOR} color={color} className="flavor">
        <h4>{(flavor && flavor.name) || 'Choose a path.'}</h4>
        {flavor !== 0 && flavor && flavor.subtitle ? (
          <p>
            {flavor.subtitle}
            <br />
            {flavor.tooltip}
          </p>
        ) : (
          <p>Select a secondary path</p>
        )}
      </S.Description>
      {runeMatrix}
      <S.Description open={openMenus.RUNES} color={color}>
        <h4>{(t1 && t1.name) || 'Secondary'}</h4>
        {t1 && t1.name ? (
          <ReactMarkdown source={t1.tooltip} escapeHtml={false} skipHtml={false} className="simpleTT" />
        ) : (
          <p>Select two runes from your secondary path</p>
        )}
      </S.Description>
      <S.Description open={openMenus.RUNES} color={altColor || color}>
        <h4>{(t2 && t2.name) || 'Secondary'}</h4>
        {t2 && t2.name ? (
          <ReactMarkdown source={t2.tooltip} escapeHtml={false} skipHtml={false} className="simpleTT" />
        ) : (
          <p>Select two runes from your secondary path</p>
        )}
      </S.Description>
    </S.Menus>
  )
}

export default SecondaryMenu
