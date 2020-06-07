import React from 'react'
import styled from '@emotion/styled'
import MenuRune from '../atoms/MenuRune'
import FlavorMenuRune from '../atoms/FlavorMenuRune'
import ReactMarkdown from 'react-markdown/with-html'

const S = {}
S.Menus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin: 8px;

  .keystones {
    height: 145px;
  }
`
S.Menu = styled.div`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  margin: 2px;
  height: 110px;
  min-width: 260px;
`

S.Description = styled.div`
  display: ${(props) => (props.open ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin: 2px;
  height: 110px;
  min-width: 260px;

  text-align: left;

  &.flavors {
    padding-top: 30px;
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
  slotMachine,
  slotColor,
  paths,
}) {
  var altColor = null
  altColor = t3 && t3.name === 'Zim’s Magical Rune Randomization Machine' && slotMachine ? slotColor : color
  t3 = t3 && t3.name === 'Zim’s Magical Rune Randomization Machine' && slotMachine ? slotMachine : t3
  return (
    <S.Menus>
      <S.Menu open={openMenus.FLAVOR} className="flavors">
        {paths &&
          paths.map((rune, id) => {
            if (id !== 0)
              return (
                <FlavorMenuRune
                  img={rune.img}
                  onClick={() => onSelectFlavor(id)}
                  key={'primeflavor' + id}
                  picked={rune.name === flavor.name}
                />
              )
            else return <div key={'primeflavor' + id}></div>
          })}
      </S.Menu>
      <S.Description open={openMenus.FLAVOR} color={color}>
        <h4>{flavor ? flavor.name : 'Choose a path.'}</h4>
        {flavor ? (
          <p>
            {flavor.subtitle}
            <br />
            {flavor.tooltip}
          </p>
        ) : (
          <p>Select a Path</p>
        )}
      </S.Description>
      <S.Menu open={openMenus.KEYSTONE} className="keystones">
        {flavor && flavor.slots
          ? flavor.slots[0].map((rune, id) => (
              <MenuRune
                keystone
                color={color}
                img={rune.img}
                title={rune.name}
                description={rune.detail}
                onClick={() => onSelectKeystone(id)}
                key={'keystone' + id + rune.name}
                disabled={keystone ? rune.name !== keystone.name : false}
              />
            ))
          : flavor &&
            flavor.keystones &&
            flavor.keystones.map((rune, id) => (
              <MenuRune
                keystone
                color={color}
                img={rune.img}
                title={rune.name}
                description={rune.detail}
                onClick={() => onSelectKeystone(id)}
                key={'keystone' + id + rune.name}
                disabled={keystone ? rune.name !== keystone.name : false}
              />
            ))}
      </S.Menu>
      <S.Description open={openMenus.KEYSTONE} color={color} className="keystones">
        <h4>{(keystone && keystone.name) || 'Keystone'}</h4>
        {/* Strip away all html tags from description */}
        {keystone && keystone.tooltip ? (
          <ReactMarkdown source={keystone.tooltip} escapeHtml={false} skipHtml={false} className="simpleTT" />
        ) : (
          <p>Select a keystone</p>
        )}
      </S.Description>
      <S.Menu open={openMenus.T1}>
        {flavor &&
          flavor.tier1 &&
          flavor.tier1.map((rune, id) => (
            <MenuRune
              color={color}
              img={rune.img}
              title={rune.name}
              description={rune.detail}
              onClick={() => onSelectT1(id)}
              key={'t1' + id + rune.name}
              disabled={t1 ? rune.name !== t1.name : false}
            />
          ))}
      </S.Menu>
      <S.Description open={openMenus.T1} color={color}>
        <h4>{(t1 && t1.name) || (flavor && flavor.tierNames && flavor.tierNames[0]) || '1st Tier'}</h4>
        {/* Strip away all html tags from description */}
        {t1 && t1.tooltip ? (
          <ReactMarkdown source={t1.tooltip} escapeHtml={false} skipHtml={false} className="simpleTT" />
        ) : (
          <p>Select a rune</p>
        )}
      </S.Description>
      <S.Menu open={openMenus.T2}>
        {flavor &&
          flavor.tier2 &&
          flavor.tier2.map((rune, id) => (
            <MenuRune
              color={color}
              img={rune.img}
              title={rune.name}
              description={rune.detail}
              onClick={() => onSelectT2(id)}
              key={'t2' + id + rune.name}
              disabled={t2 ? rune.name !== t2.name : false}
            />
          ))}
      </S.Menu>
      <S.Description open={openMenus.T2} color={color}>
        <h4>{(t2 && t2.name) || (flavor && flavor.tierNames && flavor.tierNames[1]) || '2nd Tier'}</h4>
        {/* Strip away all html tags from description */}
        {t2 && t2.tooltip ? (
          <ReactMarkdown source={t2.tooltip} escapeHtml={false} skipHtml={false} className="simpleTT" />
        ) : (
          <p>Select a rune</p>
        )}
      </S.Description>
      <S.Menu open={openMenus.T3}>
        {flavor &&
          flavor.tier3 &&
          flavor.tier3.map((rune, id) => (
            <MenuRune
              color={color}
              img={rune.img}
              title={rune.name}
              description={rune.detail}
              onClick={() => onSelectT3(id)}
              key={'t3' + id + rune.name}
              disabled={t3 ? rune.name !== t3.name : false}
            />
          ))}
      </S.Menu>
      <S.Description open={openMenus.T3} color={altColor || color}>
        <h4>{(t3 && t3.name) || (flavor && flavor.tierNames && flavor.tierNames[2]) || '3rd Tier'}</h4>
        {/* Strip away all html tags from description */}
        {t3 && t3.tooltip ? (
          <ReactMarkdown source={t3.tooltip} escapeHtml={false} skipHtml={false} className="simpleTT" />
        ) : (
          <p>Select a rune</p>
        )}
      </S.Description>
    </S.Menus>
  )
}

export default PrimaryMenu
