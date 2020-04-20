import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import styled from '@emotion/styled'
import flavors from '../../constants/assetsMap'
import PrimaryTree from '../../components/molecules/PrimaryTree'
import SecondaryTree from '../../components/molecules/SecondaryTree'
import PrimaryMenu from '../../components/molecules/PrimaryMenu'
import SecondaryMenu from '../../components/molecules/SecondaryMenu'
import Layout from '../../constants/layoutConstants'
import {
  selectPrimaryFlavor,
  selectKeystone,
  selectPrimaryT1,
  selectPrimaryT2,
  selectPrimaryT3,
  selectSecondaryRunes,
  selectSecondaryFlavor,
  toggleMenu,
  loadPathsFromFirestore,
  loadFromPermalink,
  triggerSlot,
} from '../../actions/composition'
// import { restoreFromBackup } from '../../actions/editor'

const S = {}
S.CompBuilder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`

const mapStateToProps = (state) => {
  let paths = state.composition.paths ? state.composition.paths : flavors

  var primeFlavor = paths[state.composition.PRIMARY_FLAVOR]
  var keystone = primeFlavor.keystones[state.composition.KEYSTONE]
  var primeT1 = primeFlavor.tier1[state.composition.PRIMARY_T1]
  var primeT2 = primeFlavor.tier2[state.composition.PRIMARY_T2]
  var primeT3 = primeFlavor.tier3[state.composition.PRIMARY_T3]

  var secondFlavor = paths[state.composition.SECONDARY_FLAVOR || 0]
  var secondT1 = secondFlavor['tier' + (state.composition.SECONDARY_T1_ROW + 1)][state.composition.SECONDARY_T1_ID]
  var secondT2 = secondFlavor['tier' + (state.composition.SECONDARY_T2_ROW + 1)][state.composition.SECONDARY_T2_ID]
  var runeMatrixIndex = [
    [state.composition.SECONDARY_T1_ROW, state.composition.SECONDARY_T1_ID],
    [state.composition.SECONDARY_T2_ROW, state.composition.SECONDARY_T2_ID],
  ]
  var slotMachine =
    state.composition.slotMachine &&
    paths[state.composition.slotMachine.flavor]['tier' + (state.composition.slotMachine.tier + 1)][
      state.composition.slotMachine.id
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
    slotMachine: slotMachine,
    fresh: state.composition.fresh,
  }
}

const mapDispatchToProps = (dispatch) => ({
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
  loadPathsFromFirestore: () => dispatch(loadPathsFromFirestore()),
  // restoreFromBackup: () => dispatch(restoreFromBackup(flavors[0])),
  loadFromPermalink: (pathID) => dispatch(loadFromPermalink(pathID)),
  triggerSlot: () => dispatch(triggerSlot(true, flavors)),
})

class CompBuilder extends Component {
  componentDidMount() {
    // console.log(this.props.pathID)

    // let pathID = this.props.match.params.pathID
    // this.props.restoreFromBackup()
    this.props.pathID && this.props.loadFromPermalink(this.props.pathID)
    this.props.loadPathsFromFirestore()
  }

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
      slotMachine,
      triggerSlot,
      fresh,
      pathID,
    } = this.props

    return (
      <S.CompBuilder>
        <PrimaryTree
          color={primeFlavor === null ? Layout.GOLD : primeFlavor.colorRGB}
          keystone={keystone}
          t1={primeT1}
          t2={primeT2}
          t3={primeT3}
          onToggle={(menu) => {
            toggleMenu({ tree: 'PRIMARY', ...menu })
          }}
          openMenus={open.PRIMARY}
          slotMachine={slotMachine}
          triggerSlot={(!pathID || !fresh) && secondT2 && triggerSlot}
        />
        <PrimaryMenu
          color={primeFlavor.colorRGB}
          keystone={keystone}
          t1={primeT1}
          t2={primeT2}
          t3={primeT3}
          flavor={primeFlavor}
          onSelectFlavor={(id) => {
            onSelectPrimaryFlavor(id)
          }}
          onSelectKeystone={(id) => {
            onSelectKeystone(id)
          }}
          onSelectT1={(id) => {
            onSelectPrimaryT1(id)
          }}
          onSelectT2={(id) => {
            onSelectPrimaryT2(id)
          }}
          onSelectT3={(id) => {
            onSelectPrimaryT3(id)
          }}
          openMenus={open.PRIMARY}
          slotMachine={slotMachine}
        />
        <SecondaryTree
          color={secondFlavor.colorRGB}
          t1={secondT1}
          t2={secondT2}
          onToggle={(menu) => {
            toggleMenu({ tree: 'SECONDARY', ...menu })
          }}
          openMenus={open.SECONDARY}
          slotMachine={slotMachine}
          triggerSlot={(!pathID || !fresh) && triggerSlot}
        />
        <SecondaryMenu
          color={secondFlavor.colorRGB}
          flavor={secondFlavor}
          onSelectFlavor={(id) => {
            onSelectSecondaryFlavor(id)
          }}
          onSelectRunes={(row, id) => {
            onSelectSecondaryRunes(row, id)
          }}
          openMenus={open.SECONDARY}
          primeFlavor={primeFlavor}
          runes={[secondFlavor.tier1, secondFlavor.tier2, secondFlavor.tier3]}
          t1={secondT1}
          t2={secondT2}
          index={runeMatrixIndex}
          slotMachine={slotMachine}
        />
      </S.CompBuilder>
    )
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'paths' }]),
)(CompBuilder)
