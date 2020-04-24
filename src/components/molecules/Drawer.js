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

  #runeMenu {
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

    box-sizing: border-box;
  }

  .listItemWrapper > div {
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    padding-bottom: 8px;
    padding-top: 8px;
    padding-right: 16px;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }

  .iconWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: rgba(255, 255, 255, 0.05); */
    height: 80px;
    width: 100%;
    max-width: 44px;
    padding-bottom: 8px;
    padding-top: 8px;
    /* padding-left: 8px; */
    box-sizing: border-box;
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
}) => {
  selected =
    selected && selected.name === 'Zim’s Magical Rune Randomization Machine' && slotMachine ? slotMachine : selected

  return (
    <S.Drawer color={color}>
      <ListItem button onClick={onToggle}>
        <div className="runeWrap">
          <Rune
            active={open}
            img={
              selected && selected.name === 'Zim’s Magical Rune Randomization Machine' && slotMachine
                ? slotMachine.img
                : selected && selected.img
            }
            color={color}
            slotMachine={selected && selected.name === 'Zim’s Magical Rune Randomization Machine'}
            triggerSlot={triggerSlot}
            keystone={keystone}
          />
        </div>
        <ListItemText>
          <h4>
            {selected
              ? (selected.name === 'Zim’s Magical Rune Randomization Machine' && slotMachine && slotMachine.name) ||
                selected.name
              : flavor
              ? keystone
                ? 'Keystone'
                : flavor.tierNames[tier - 1]
              : ''}
          </h4>
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
        <List component="div" disablePadding id="runeMenu">
          {runes &&
            runes.map((rune, id) =>
              (flavor ? (
                rune.name !== flavor.name
              ) : (
                true
              )) ? (
                <ListItem button key={rune.name + id + 'LI'} className="subMenu">
                  <div className="listItemWrapper">
                    <div onClick={() => onSelect(id)}>
                      <div className="runeWrap">
                        {isFlavor ? (
                          <FlavorMenuRune
                            img={rune.img}
                            picked={selected ? rune.name === selected.name : false}
                            key={rune.name + id + 'RUNE'}
                            onClick={() => onSelect(id)}
                          />
                        ) : (
                          <MenuRune
                            img={rune.img}
                            onClick={() => onSelect(id)}
                            disabled={selected ? rune.name !== selected.name : false}
                            key={rune.name + id + 'RUNE'}
                            color={color}
                          />
                        )}
                      </div>
                      <ListItemText>
                        <h4 style={{ color: 'rgba(' + rune.colorRGB + ',1)' }}>{rune.name}</h4>
                        {/* Strip away all html tags from description */}
                        <p>
                          {rune
                            ? (isFlavor ? rune.subtitle : rune.tooltip) &&
                              (isFlavor ? rune.subtitle : rune.tooltip).replace(/<\/?[^>]+(>|$)/g, '')
                            : `Select a rune`}
                        </p>
                      </ListItemText>
                    </div>
                    {isFlavor || (
                      <div className="iconWrapper" onClick={() => moreInfo({ rune: rune, color: color, id: id })}>
                        <InfoIcon htmlColor="white" key={rune.name + id + 'INFO'} />
                      </div>
                    )}
                  </div>
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
