import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import PrimaryTree from '../../components/molecules/PrimaryTree'
import SecondaryTree from '../../components/molecules/SecondaryTree'
import PrimaryMenu from '../../components/molecules/PrimaryMenu'
import SecondaryMenu from '../../components/molecules/SecondaryMenu'
import flavors from '../../constants/assetsMap'
import {
  selectPrimaryFlavor,
  selectKeystone,
  selectPrimaryT1,
  selectPrimaryT2,
  selectPrimaryT3,
  selectSecondaryT1,
  selectSecondaryT2,
  selectSecondaryFlavor,
} from '../../actions/counter'

const S = {}
S.CompBuilder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
`

const mapStateToProps = (state) => {
  return {
    primeFlavor: state.composition.PRIMARY_FLAVOR,
    keystone: state.composition.KEYSTONE,
    primeT1: state.composition.PRIMARY_T1,
    primeT2: state.composition.PRIMARY_T2,
    primeT3: state.composition.PRIMARY_T3,
    secondFlavor: state.composition.SECONDARY_FLAVOR,
    secondT1: state.composition.SECONDARY_T1,
    secondT2: state.composition.SECONDARY_T2,
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
    onSelectSecondaryT1: (id) => dispatch(selectSecondaryT1(id)),
    onSelectSecondaryT2: (id) => dispatch(selectSecondaryT2(id)),
  }
}

class CompBuilder extends Component {
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
      onSelectSecondaryT1,
      secondT2,
      onSelectSecondaryT2,
    } = this.props
    const selectedFlavor1 = flavors[primeFlavor]
    const selectedFlavor2 = flavors[secondFlavor]
    return (
      <S.CompBuilder>
        <PrimaryTree
          color={selectedFlavor1.colorRGB}
          keystone={selectedFlavor1.keystones[keystone]}
          t1={selectedFlavor1.tier1[primeT1]}
          t2={selectedFlavor1.tier2[primeT2]}
          t3={selectedFlavor1.tier3[primeT3]}
        />
        <PrimaryMenu
          color={selectedFlavor1.colorRGB}
          flavor={selectedFlavor1}
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
        />
        <SecondaryTree
          color={selectedFlavor2.colorRGB}
          t1={selectedFlavor2.tier1[secondT1]}
          t2={selectedFlavor2.tier2[secondT2]}
        />
        <SecondaryMenu
          color={selectedFlavor2.colorRGB}
          flavor={selectedFlavor2}
          onSelectFlavor={(id) => {
            onSelectSecondaryFlavor(id)
          }}
          onSelectT1={(id) => {
            onSelectSecondaryT1(id)
          }}
          onSelectT2={(id) => {
            onSelectSecondaryT2(id)
          }}
        />
      </S.CompBuilder>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompBuilder)
