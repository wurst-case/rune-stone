import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import styled from '@emotion/styled'
import PrimaryTree from '../components/molecules/PrimaryTree'
import PrimaryMenu from '../components/molecules/PrimaryMenu'
import Layout from '../constants/layoutConstants'
import {
  loadResume,
  selectResumeKeystone,
  selectResumeTier1,
  selectResumeTier2,
  selectResumeTier3,
  toggleResumeMenu,
} from '../actions/resumeActions'

const S = {}
S.ResumeContainer = styled.div`
  background-image: url('https://firebasestorage.googleapis.com/v0/b/custom-rune-pages.appspot.com/o/runePathImages%2Fbandle%2Fbg_em.png?alt=media&token=882fd2d6-2796-4575-91b9-4de6408807e1');
  background-position: 0% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${Layout.DARK};

  text-align: center;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  margin-left: 64px;
  padding-left: 64px;

  & > div.resumeWrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    width: 100%;
  }
`

const mapStateToProps = (state) => {
  let path = state.resume.path
  var keystone = path && path.keystones && path.keystones[state.resume.keystone]
  var t1 = path && path.tier1 && path.tier1[state.resume.t1]
  var t2 = path && path.tier2 && path.tier2[state.resume.t2]
  var t3 = path && path.tier3 && path.tier3[state.resume.t3]

  return {
    path: path || null,
    keystone: keystone || null,
    t1: t1 || null,
    t2: t2 || null,
    t3: t3 || null,
    open: {
      KEYSTONE: state.resume.open.keystone,
      T1: state.resume.open.t1,
      T2: state.resume.open.t2,
      T3: state.resume.open.t3,
    },
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadResume: () => dispatch(loadResume()),
  onSelectKeystone: (id) => dispatch(selectResumeKeystone(id)),
  onSelectT1: (id) => dispatch(selectResumeTier1(id)),
  onSelectT2: (id) => dispatch(selectResumeTier2(id)),
  onSelectT3: (id) => dispatch(selectResumeTier3(id)),
  toggleMenu: (menu) => dispatch(toggleResumeMenu(menu)),
})

class ResumeContainer extends Component {
  componentDidMount() {
    this.props.loadResume()
  }

  render() {
    const {
      path,
      keystone,
      onSelectKeystone,
      t1,
      onSelectT1,
      t2,
      onSelectT2,
      t3,
      onSelectT3,
      toggleMenu,
      open,
    } = this.props
    return (
      <S.ResumeContainer>
        <div className="resumeWrapper">
          <PrimaryTree
            color={path === null ? Layout.GOLD : path.colorRGB}
            keystone={keystone}
            t1={t1}
            t2={t2}
            t3={t3}
            onToggle={(tier) => toggleMenu({ ...tier })}
            openMenus={open}
            triggerSlot={() => console.log()}
            resetSlotMachine={() => console.log()}
            icon={path && path.img}
          />
          <PrimaryMenu
            color={path && path.colorRGB}
            keystone={keystone}
            t1={t1}
            t2={t2}
            t3={t3}
            flavor={path}
            onSelectFlavor={(id) => console.log(id)}
            onSelectKeystone={(id) => onSelectKeystone(id)}
            onSelectT1={(id) => onSelectT1(id)}
            onSelectT2={(id) => onSelectT2(id)}
            onSelectT3={(id) => onSelectT3(id)}
            openMenus={open}
            paths={[path]}
          />
        </div>
      </S.ResumeContainer>
    )
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'paths' }]),
)(ResumeContainer)
