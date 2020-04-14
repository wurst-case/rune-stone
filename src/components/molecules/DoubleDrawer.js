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

export const DoubleDrawer = ({ color, open, onToggle, flavor, runes, selected1, selected2, onSelect }) => {
  return (
    <S.Drawer color={color}>
      <ListItem button onClick={onToggle}>
        <Rune active={open} img={selected1 ? selected1.src : null} color={color} />
        <ListItemText>
          <h4>{selected1 ? selected1.name : null}</h4>
          <p>{selected1 ? selected1.details.replace(/<\/?[^>]+(>|$)/g, '') : 'Please select rune.'}</p>
        </ListItemText>
      </ListItem>
      <ListItem button onClick={onToggle}>
        <Rune active={open} img={selected2 ? selected2.src : null} color={color} />
        <ListItemText>
          <h4>{selected2 ? selected2.name : null}</h4>
          <p>{selected2 ? selected2.details.replace(/<\/?[^>]+(>|$)/g, '') : 'Please select rune.'}</p>
        </ListItemText>
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding id="runeMenu">
          {runes ? (
            runes.map((tier, row) =>
              tier.map((rune, id) => (
                <ListItem button onClick={() => onSelect(row, id)} key={rune.name + id + 'LI'}>
                  <MenuRune
                    img={rune.src}
                    onClick={() => {}}
                    // picked={selected1 || selected2 ? rune.name === selected1.name || rune.name === selected2.name : false}
                    key={rune.name + id + 'RUNE'}
                    color={color}
                  />
                  <ListItemText>
                    <h4>{rune ? rune.name : flavor.tierNames[0]}</h4>
                    {/* Strip away all html tags from description */}
                    <p>{rune ? rune.details.replace(/<\/?[^>]+(>|$)/g, '') : `Select a rune`}</p>
                  </ListItemText>
                  <ListItemIcon key={rune.name + id + 'ICON'}>
                    <InfoIcon htmlColor="white" key={rune.name + id + 'INFO'} />
                  </ListItemIcon>
                </ListItem>
              )),
            )
          ) : (
            <div />
          )}
        </List>
      </Collapse>
    </S.Drawer>
  )
}

export default DoubleDrawer
