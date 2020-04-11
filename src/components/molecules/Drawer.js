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
import flavors from '../../constants/assetsMap'

const S = {}
S.Drawer = styled.div`
  background: rgba(80, 80, 80, 0.25);
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
`

export const Drawer = ({ color, open, onToggle, flavor, runes, selected, onSelect, keystone }) => {
  return (
    <S.Drawer color={color}>
      <ListItem button onClick={onToggle}>
        <Rune keystone={keystone} active={open} img={selected ? selected.src : null} />
        <ListItemText primary={selected ? selected.name : null} />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {runes ? (
            runes.map((rune, id) => (
              <ListItem button onClick={() => onSelect(id)} key={rune.name + id + 'LI'}>
                {flavor ? (
                  <FlavorMenuRune
                    img={rune.src}
                    onClick={() => {}}
                    picked={selected ? rune.name === selected.name : false}
                    key={rune.name + id + 'RUNE'}
                  />
                ) : (
                  <MenuRune
                    img={rune.src}
                    onClick={() => {}}
                    picked={selected ? rune.name === selected.name : false}
                    key={rune.name + id + 'RUNE'}
                  />
                )}
                <ListItemText>
                  <h4>{rune ? rune.name : flavor.tierNames[0]}</h4>
                  {/* Strip away all html tags from description */}
                  <p>{rune ? rune.details.replace(/<\/?[^>]+(>|$)/g, '') : `Select a rune`}</p>
                </ListItemText>
                <ListItemIcon key={rune.name + id + 'ICON'}>
                  <InfoIcon htmlColor="white" key={rune.name + id + 'INFO'} />
                </ListItemIcon>
              </ListItem>
            ))
          ) : (
            <div />
          )}
        </List>
      </Collapse>
    </S.Drawer>
  )
}

export default Drawer
