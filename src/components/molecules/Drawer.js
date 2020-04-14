import React from 'react'
import styled from '@emotion/styled'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
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
  }

  .title {
    padding-left: 8px;
    font-family: 'Beaufort W01 Bold1339640';
  }

  #runeMenu {
    background-color: rgba(255, 255, 255, 0.05);
  }
`

export const Drawer = ({ color, open, onToggle, isFlavor, flavor, runes, selected, onSelect, keystone, tier }) => {
  return (
    <S.Drawer color={color}>
      <ListItem button onClick={onToggle}>
        <Rune active={open} img={selected ? selected.src : null} color={color} />
        <ListItemText>
          <h4>{selected ? selected.name : flavor ? (keystone ? 'Keystone' : flavor.tierNames[tier - 1]) : ''}</h4>
          <p>
            {selected ? selected.details.replace(/<\/?[^>]+(>|$)/g, '') : isFlavor ? `Select a path` : `Select a rune`}
          </p>
        </ListItemText>
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding id="runeMenu">
          {runes.map((rune, id) =>
            (flavor ? (
              rune.name !== flavor.name
            ) : (
              true
            )) ? (
              <ListItem button key={rune.name + id + 'LI'}>
                {isFlavor ? (
                  <FlavorMenuRune
                    img={rune.src}
                    picked={selected ? rune.name === selected.name : false}
                    key={rune.name + id + 'RUNE'}
                    onClick={() => onSelect(id)}
                  />
                ) : (
                  <MenuRune
                    img={rune.src}
                    onClick={() => onSelect(id)}
                    disabled={selected ? rune.name !== selected.name : false}
                    key={rune.name + id + 'RUNE'}
                    color={color}
                  />
                )}
                <ListItemText onClick={() => onSelect(id)}>
                  <h4>{rune.name}</h4>
                  {/* Strip away all html tags from description */}
                  <p>{rune ? rune.details.replace(/<\/?[^>]+(>|$)/g, '') : `Select a rune`}</p>
                </ListItemText>
                <ListItemIcon key={rune.name + id + 'ICON'} onClick={() => console.log(id)}>
                  <InfoIcon htmlColor="white" key={rune.name + id + 'INFO'} />
                </ListItemIcon>
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
