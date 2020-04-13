import React, { Component } from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import List from '@material-ui/core/List'

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
import DoubleDrawer from '../molecules/DoubleDrawer'
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
    background: rgba(80, 80, 80, 0.15);
  }

  #nested-list-subheader {
    color: white;
    font-size: 0.75rem;
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

        <List component="nav" aria-labelledby="nested-list-subheader">
          <Drawer
            open={open.PRIMARY.FLAVOR}
            onToggle={() => toggleMenu({ tree: 'PRIMARY', tier: 'FLAVOR' })}
            onSelect={(id) => onSelectPrimaryFlavor(id + 1)}
            runes={flavors.slice(1)}
            selected={primeFlavor}
            isFlavor
            color={primeFlavor.colorRGB}
          />
          <Drawer
            open={open.PRIMARY.KEYSTONE}
            onToggle={() => toggleMenu({ tree: 'PRIMARY', tier: 'KEYSTONE' })}
            onSelect={onSelectKeystone}
            runes={primeFlavor.keystones}
            selected={keystone}
            flavor={primeFlavor}
            color={primeFlavor.colorRGB}
            keystone
          />
          <Drawer
            open={open.PRIMARY.T1}
            onToggle={() => toggleMenu({ tree: 'PRIMARY', tier: 'T1' })}
            onSelect={onSelectPrimaryT1}
            runes={primeFlavor.tier1}
            selected={primeT1}
            flavor={primeFlavor}
            color={primeFlavor.colorRGB}
            tier={1}
          />
          <Drawer
            open={open.PRIMARY.T2}
            onToggle={() => toggleMenu({ tree: 'PRIMARY', tier: 'T2' })}
            onSelect={onSelectPrimaryT2}
            runes={primeFlavor.tier2}
            selected={primeT2}
            flavor={primeFlavor}
            color={primeFlavor.colorRGB}
            tier={2}
          />
          <Drawer
            open={open.PRIMARY.T3}
            onToggle={() => toggleMenu({ tree: 'PRIMARY', tier: 'T3' })}
            onSelect={onSelectPrimaryT3}
            runes={primeFlavor.tier3}
            selected={primeT3}
            flavor={primeFlavor}
            color={primeFlavor.colorRGB}
            tier={3}
          />
        </List>
        <List component="nav" aria-labelledby="nested-list-subheader">
          <Drawer
            open={open.SECONDARY.FLAVOR}
            onToggle={() => toggleMenu({ tree: 'SECONDARY', tier: 'FLAVOR' })}
            onSelect={(id) => onSelectSecondaryFlavor(id + 1)}
            runes={flavors.slice(1)}
            selected={secondFlavor}
            isFlavor
            flavor={primeFlavor}
            color={secondFlavor ? secondFlavor.colorRGB : Layout.GOLD}
          />
          <DoubleDrawer
            open={open.SECONDARY.RUNES}
            onToggle={() => toggleMenu({ tree: 'SECONDARY', tier: 'RUNES' })}
            onSelect={(row, id) => {
              onSelectSecondaryRunes(row, id)
            }}
            runes={secondFlavor ? [].concat(secondFlavor.tier1, secondFlavor.tier2, secondFlavor.tier3) : []}
            selected1={secondT1}
            selected2={secondT2}
            color={secondFlavor ? secondFlavor.colorRGB : Layout.GOLD}
            index={runeMatrixIndex}
          />
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

  var secondFlavor = state.composition.SECONDARY_FLAVOR ? flavors[state.composition.SECONDARY_FLAVOR] : null
  var secondT1 = secondFlavor
    ? secondFlavor['tier' + (state.composition.SECONDARY_T1_ROW + 1)][state.composition.SECONDARY_T1_ID]
    : null
  var secondT2 = secondFlavor
    ? secondFlavor['tier' + (state.composition.SECONDARY_T2_ROW + 1)][state.composition.SECONDARY_T2_ID]
    : null
  var runeMatrixIndex = secondFlavor
    ? [
        [state.composition.SECONDARY_T1_ROW, state.composition.SECONDARY_T1_ID],
        [state.composition.SECONDARY_T2_ROW, state.composition.SECONDARY_T2_ID],
      ]
    : null

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
