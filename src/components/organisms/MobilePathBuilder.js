import React, { Component } from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'

import flavors from '../../constants/assetsMap'
import {
  selectPrimaryFlavor,
  selectKeystone,
  selectPrimaryT1,
  selectPrimaryT2,
  selectPrimaryT3,
  selectSecondaryRunes,
  selectSecondaryFlavor,
  toggleMenu,
} from '../../actions/counter'

import Drawer from '../molecules/Drawer'
import Layout from '../../constants/layoutConstants'

const S = {}
S.Path = styled.div`
  @media only screen and (min-width: 600px) {
    display: none;
  }

  background: ${Layout.DARK};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 0;
  margin: 0;

  & > img {
    height: 33vh;
    min-height: 180px;
    width: 100%;
    object-fit: cover;
    object-position: top right;
  }

  .MuiList-root {
    background: rgba(80, 80, 80, 0.25);
  }
`

class MobilePathBuilder extends Component {
  render() {
    const {
      primeFlavor,
      onSelectPrimaryFlavor,
      keystone,
      onSelectKeystone,
      primeT1,
      onSelectPrimaryT1,
      primeT2,
      onSelectPrimaryT2,
      primeT3,
      onSelectPrimaryT3,
      secondFlavor,
      onSelectSecondaryFlavor,
      secondT1,
      secondT2,
      runeMatrixIndex,
      onSelectSecondaryRunes,
      toggleMenu,
      open,
      bgImage,
    } = this.props
    return (
      <S.Path>
        <img src={bgImage} alt="" />

        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Choose your secondary path
            </ListSubheader>
          }
        >
          <Drawer
            open={open.PRIMARY.FLAVOR}
            onToggle={() => toggleMenu({ tree: 'PRIMARY', tier: 'FLAVOR' })}
            onSelect={(id) => onSelectPrimaryFlavor(id + 1)}
            runes={flavors.slice(1)}
            selected={primeFlavor}
            flavor
            color={primeFlavor.colorRGB}
          />
          <Drawer
            open={open.PRIMARY.KEYSTONE}
            onToggle={() => toggleMenu({ tree: 'PRIMARY', tier: 'KEYSTONE' })}
            onSelect={onSelectKeystone}
            runes={primeFlavor.keystones}
            selected={keystone}
            color={primeFlavor.colorRGB}
          />
          <Drawer
            open={open.PRIMARY.T1}
            onToggle={() => toggleMenu({ tree: 'PRIMARY', tier: 'T1' })}
            onSelect={onSelectPrimaryT1}
            runes={primeFlavor.tier1}
            selected={primeT1}
            color={primeFlavor.colorRGB}
          />
          <Drawer
            open={open.PRIMARY.T2}
            onToggle={() => toggleMenu({ tree: 'PRIMARY', tier: 'T2' })}
            onSelect={onSelectPrimaryT2}
            runes={primeFlavor.tier2}
            selected={primeT2}
            color={primeFlavor.colorRGB}
          />
          <Drawer
            open={open.PRIMARY.T3}
            onToggle={() => toggleMenu({ tree: 'PRIMARY', tier: 'T3' })}
            onSelect={onSelectPrimaryT3}
            runes={primeFlavor.tier3}
            selected={primeT3}
            color={primeFlavor.colorRGB}
          />
        </List>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Choose your primary path
            </ListSubheader>
          }
        >
          {/* <Drawer
            open={open.SECONDARY.FLAVOR}
            onToggle={() => toggleMenu({ tree: 'SECONDARY', tier: 'FLAVOR' })}
            onSelect={onSelectSecondaryFlavor}
            runes={flavors.map((flavor) => {
              if (flavor.name !== primeFlavor.name) return flavor
            })}
            selected={secondFlavor}
            flavor
          /> */}
          {/* <Drawer
            open={open.SECONDARY.T1}
            onToggle={() => toggleMenu({ tree: 'SECONDARY', tier: 'T1' })}
            onSelect={onSelectSecondaryT1}
            runes={secondFlavor.tier1}
            selected={secondT1}
          /> */}
        </List>
      </S.Path>
    )
  }
}

const mapStateToProps = (state) => {
  var primeFlavor = flavors[state.composition.PRIMARY_FLAVOR]
  var keystone = primeFlavor.keystones[state.composition.KEYSTONE]
  var primeT1 = primeFlavor.tier1[state.composition.PRIMARY_T1]
  var primeT2 = primeFlavor.tier2[state.composition.PRIMARY_T2]
  var primeT3 = primeFlavor.tier3[state.composition.PRIMARY_T3]

  var secondFlavor = flavors[state.composition.SECONDARY_FLAVOR]
  var secondT1 = secondFlavor['tier' + (state.composition.SECONDARY_T1_ROW + 1)][state.composition.SECONDARY_T1_ID]
  var secondT2 = secondFlavor['tier' + (state.composition.SECONDARY_T2_ROW + 1)][state.composition.SECONDARY_T2_ID]
  var runeMatrixIndex = [
    [state.composition.SECONDARY_T1_ROW, state.composition.SECONDARY_T1_ID],
    [state.composition.SECONDARY_T2_ROW, state.composition.SECONDARY_T2_ID],
  ]

  return {
    primeFlavor: primeFlavor,
    keystone: keystone,
    primeT1: primeT1,
    primeT2: primeT2,
    primeT3: primeT3,
    secondFlavor: secondFlavor,
    secondT1: secondT1,
    secondT2: secondT2,
    runeMatrixIndex: runeMatrixIndex,
    open: {
      PRIMARY: {
        FLAVOR: state.composition.OPEN.PRIMARY.FLAVOR,
        KEYSTONE: state.composition.OPEN.PRIMARY.KEYSTONE,
        T1: state.composition.OPEN.PRIMARY.T1,
        T2: state.composition.OPEN.PRIMARY.T2,
        T3: state.composition.OPEN.PRIMARY.T3,
      },
      SECONDARY: {
        FLAVOR: state.composition.OPEN.SECONDARY.FLAVOR,
        RUNES: state.composition.OPEN.SECONDARY.RUNES,
      },
    },
    bgImage: flavors[state.composition.PRIMARY_FLAVOR].bg,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectPrimaryFlavor: (id) => dispatch(selectPrimaryFlavor(id)),
    onSelectKeystone: (id) => dispatch(selectKeystone(id)),
    onSelectPrimaryT1: (id) => dispatch(selectPrimaryT1(id)),
    onSelectPrimaryT2: (id) => dispatch(selectPrimaryT2(id)),
    onSelectPrimaryT3: (id) => dispatch(selectPrimaryT3(id)),
    onSelectSecondaryFlavor: (id) => dispatch(selectSecondaryFlavor(id)),
    onSelectSecondaryRunes: (row, id) => {
      dispatch(selectSecondaryRunes(row, id))
    },
    toggleMenu: (menu) => dispatch(toggleMenu(menu)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MobilePathBuilder)
