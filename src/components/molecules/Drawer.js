import React from 'react'
import styled from '@emotion/styled'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import InfoIcon from '@material-ui/icons/Info'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import Rune from '../atoms/Rune'
import MenuRune from '../atoms/MenuRune'
import FlavorMenuRune from '../atoms/FlavorMenuRune'

const S = {}
S.Drawer = styled.div`
  border-bottom: solid 1px grey;
  min-height: 60px;

  color: white;

  h4 {
    text-transform: uppercase;
    font-family: 'Beaufort W01 Bold1339640';
    font-size: 0.9rem;
    margin-bottom: 8px;
    margin-top: 0;
    color: rgba(${(props) => props.color}, 1);
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: 0.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  }

  p,
  h4 {
    padding: 0;
    margin: 0;
    padding-left: 8px;

    box-sizing: border-box;
  }

  .title {
    padding-left: 8px;
    font-family: 'Beaufort W01 Bold1339640';

    box-sizing: border-box;
  }

  .runeMenu {
    background-color: rgba(255, 255, 255, 0.05);
  }
  .MuiList-padding .MuiList-root {
    padding-bottom: 0;
  }

  .MuiListItem-root.subMenu {
    padding-bottom: 0;
    padding-top: 0;

    box-sizing: border-box;
  }

  .listItemWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 108px;
    padding-right: 16px;
    box-sizing: border-box;
  }

  .iconWrapper {
    min-height: 108px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .runeWrap {
    min-width: 84px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }

  .chevron {
    padding-left: 16px;
  }
`

export const Drawer = ({
  color,
  open,
  onToggle,
  isFlavor,
  flavor,
  runes,
  selected,
  onSelect,
  keystone,
  tier,
  moreInfo,
  slotMachine,
  triggerSlot,
  slotColor,
}) => {
  const zim = selected && selected.name === 'Zim’s Magical Rune Randomization Machine'
  var altColor = null
  altColor = zim && slotMachine ? slotColor : color
  selected = zim && slotMachine ? slotMachine : selected

  var title = selected
    ? (selected.name === 'Zim’s Magical Rune Randomization Machine' && slotMachine && slotMachine.name) || selected.name
    : flavor
    ? keystone
      ? 'Keystone'
      : flavor.tierNames[tier - 1]
    : ''
  var next = null //TODO: !flavor ? null : keystone ? flavor.tierNames[0] : tier !== 3 ? flavor.tierNames[tier] : null

  return (
    <S.Drawer color={altColor || color} id={title}>
      <ListItem
        button
        onClick={() => {
          onToggle()
          var elmnt = document.getElementById(next)
          elmnt && elmnt.scrollIntoView()
        }}
      >
        <div className="runeWrap">
          <Rune
            active={open}
            img={zim && slotMachine ? slotMachine.img : selected && selected.img}
            color={altColor || color}
            slotMachine={zim}
            triggerSlot={triggerSlot}
            keystone={keystone}
            glow={zim}
          />
        </div>
        <ListItemText>
          <h4>{title}</h4>
          <p>
            {selected
              ? isFlavor
                ? selected && selected.subtitle && selected.subtitle.replace(/<\/?[^>]+(>|$)/g, '')
                : (selected.name === 'Zim’s Magical Rune Randomization Machine' &&
                    slotMachine &&
                    slotMachine.tooltip &&
                    slotMachine.tooltip.replace(/<\/?[^>]+(>|$)/g, '')) ||
                  (selected.tooltip && selected.tooltip.replace(/<\/?[^>]+(>|$)/g, ''))
              : isFlavor
              ? `Select a path`
              : `Select a rune`}
          </p>
        </ListItemText>
        {open ? <ExpandLessIcon className="chevron" /> : <ExpandMoreIcon className="chevron" />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding className="runeMenu">
          {runes &&
            runes.map((rune, id) =>
              (flavor ? (
                rune.name !== flavor.name
              ) : (
                true
              )) ? (
                <ListItem button key={rune && rune.name + id + 'LI'} className="subMenu">
                  <div className="listItemWrapper" onClick={() => onSelect(id)}>
                    <div className="runeWrap">
                      {isFlavor ? (
                        <FlavorMenuRune
                          img={rune && rune.img}
                          picked={selected && rune && rune.name === selected.name}
                          key={rune && rune.name + id + 'RUNE'}
                        />
                      ) : (
                        <MenuRune
                          img={rune && rune.img}
                          disabled={selected ? rune && rune.name !== selected.name : false}
                          color={altColor || color}
                          key={rune && rune.name + id + 'RUNE'}
                        />
                      )}
                    </div>
                    <ListItemText>
                      <h4 style={{ color: 'rgba(' + (rune && rune.colorRGB) + ',1)' }}>{rune && rune.name}</h4>
                      {/* Strip away all html tags from description */}
                      <p>
                        {rune
                          ? (isFlavor ? rune && rune.subtitle : rune && rune.tooltip) &&
                            (isFlavor ? rune && rune.subtitle : rune && rune.tooltip).replace(/<\/?[^>]+(>|$)/g, '')
                          : `Select a rune`}
                      </p>
                    </ListItemText>
                  </div>
                  {!isFlavor ? (
                    <div className="iconWrapper" onClick={() => moreInfo({ rune: rune, color: color, id: id })}>
                      <InfoIcon htmlColor="white" key={rune && rune.name + id + 'INFO'} />
                    </div>
                  ) : (
                    <div key={rune && rune.name + id + 'INFO'} />
                  )}
                </ListItem>
              ) : (
                []
              ),
            )}
        </List>
      </Collapse>
    </S.Drawer>
  )
}

export default Drawer
