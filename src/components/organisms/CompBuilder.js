import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import Layout from '../../constants/layoutConstants'
import PrimaryTree from '../../components/molecules/PrimaryTree'
import SecondaryTree from '../../components/molecules/SecondaryTree'
import PrimaryMenu from '../../components/molecules/PrimaryMenu'
import SecondaryMenu from '../../components/molecules/SecondaryMenu'

const S = {}
S.CompBuilder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
`

export class CompBuilder extends Component {
  render() {
    let color = Layout.BANDLE_RGB
    return (
      <S.CompBuilder>
        <PrimaryTree color={color} />
        <PrimaryMenu color={color} />
        <SecondaryTree color={color} />
        <SecondaryMenu color={color} />
      </S.CompBuilder>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CompBuilder)
