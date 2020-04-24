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

  .MuiList-padding {
    padding-bottom: 0;
  }

  #runeMenu {
    background-color: rgba(255, 255, 255, 0.05);
  }

  .runeWrap {
    min-width: 84px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }

  .line {
    width: 100%;
    border-top: solid 1px rgba(${(props) => props.color}, 1);
  }

  .listItemWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-right: 16px;
    box-sizing: border-box;
  }

  .listItems {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'item1 chevron'
      'item2 chevron';
    width: 100%;
  }

  .chevron {
    height: 100%;
    grid-area: 'chevron';
    padding-right: 16px;
    padding-top: 40px;
  }
`

export const DoubleDrawer = ({
  color,
  open,
  onToggle,
  flavor,
  runes,
  selected1,
  selected2,
  onSelect,
  moreInfo,
  slotMachine,
  triggerSlot,
}) => {
  selected2 =
    selected2 && selected2.name === 'Zim’s Magical Rune Randomization Machine' && slotMachine ? slotMachine : selected2
  return (
    <S.Drawer color={color}>
      <div className="listItems">
        <ListItem button onClick={onToggle} style={{ gridArea: 'item1' }}>
          <div className="runeWrap">
            <Rune
              active={open}
              img={selected1 ? selected1.img : null}
              color={color}
              slotMachine={selected1 && selected1.name === 'Zim’s Magical Rune Randomization Machine'}
              triggerSlot={triggerSlot}
            />
          </div>
          <ListItemText>
            <h4>{selected1 && selected1.name}</h4>
            <p>
              {selected1
                ? selected1.tooltip && selected1.tooltip.replace(/<\/?[^>]+(>|$)/g, '')
                : 'Please select rune.'}
            </p>
          </ListItemText>
        </ListItem>
        <ListItem button onClick={onToggle} style={{ gridArea: 'item2' }}>
          <div className="runeWrap">
            <Rune
              active={open}
              img={selected2 ? selected2.img : null}
              color={color}
              slotMachine={selected2 && selected2.name === 'Zim’s Magical Rune Randomization Machine'}
              triggerSlot={triggerSlot}
            />
          </div>
          <ListItemText>
            <h4>{selected2 && selected2.name}</h4>
            <p>
              {selected2
                ? selected2.tooltip && selected2.tooltip.replace(/<\/?[^>]+(>|$)/g, '')
                : 'Please select rune.'}
            </p>
          </ListItemText>
        </ListItem>
        {open ? <ExpandLessIcon className="chevron" /> : <ExpandMoreIcon className="chevron" />}
      </div>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding id="runeMenu">
          {runes &&
            runes.map((tier, row) => (
              <div key={'row' + row}>
                {tier.map((rune, id) => (
                  <ListItem button key={rune.name + id + 'LI'}>
                    <div className="listItemWrapper" onClick={() => onSelect(row, id)}>
                      <div className="runeWrap">
                        <MenuRune
                          img={rune.img}
                          onClick={() => {}}
                          // picked={selected1 || selected2 ? rune.name === selected1.name || rune.name === selected2.name : false}
                          key={rune.name + id + 'RUNE'}
                          color={color}
                        />
                      </div>
                      <ListItemText>
                        <h4>{rune ? rune.name : flavor.tierNames[0]}</h4>
                        {/* Strip away all html tags from description */}
                        <p>{rune ? rune.tooltip && rune.tooltip.replace(/<\/?[^>]+(>|$)/g, '') : `Select a rune`}</p>
                      </ListItemText>
                    </div>
                    <div
                      className="iconWrapper"
                      onClick={() => moreInfo({ rune: rune, color: color, id: id, tier: row })}
                    >
                      <InfoIcon htmlColor="white" key={rune.name + id + 'INFO'} />
                    </div>
                  </ListItem>
                ))}
                <div className="line" key={'line' + row} />
              </div>
            ))}
        </List>
      </Collapse>
    </S.Drawer>
  )
}

export default DoubleDrawer
