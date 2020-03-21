import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import PrimaryTree from '../../components/molecules/PrimaryTree'
import SecondaryTree from '../../components/molecules/SecondaryTree'
import PrimaryMenu from '../../components/molecules/PrimaryMenu'
import SecondaryMenu from '../../components/molecules/SecondaryMenu'
import flavors from '../../constants/assetsMap'
import { selectPrimaryFlavor } from '../../actions/counter'

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
    flavor: state.composition.PRIMARY_FLAVOR,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectPrimaryFlavor: (id) => dispatch(selectPrimaryFlavor(id)),
  }
}

class CompBuilder extends Component {
  render() {
    const { flavor, onSelectPrimaryFlavor } = this.props
    const selectedFlavor = flavors[flavor]
    return (
      <S.CompBuilder>
        <PrimaryTree color={selectedFlavor.colorRGB} />
        <PrimaryMenu
          color={selectedFlavor.colorRGB}
          flavor={selectedFlavor}
          onClick={(id) => {
            onSelectPrimaryFlavor(id)
          }}
        />
        {/* <SecondaryTree color={color} />
        <SecondaryMenu color={color} /> */}
      </S.CompBuilder>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompBuilder)
