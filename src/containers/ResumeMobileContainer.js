import React, { Component } from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import List from '@material-ui/core/List'

import {
  loadResume,
  selectResumeKeystone,
  selectResumeTier1,
  selectResumeTier2,
  selectResumeTier3,
  toggleResumeMenu,
  toggleResumeInfo,
} from '../actions/resumeActions'

import Drawer from '../components/molecules/Drawer'
import Layout from '../constants/layoutConstants'
import InfoDisplay from '../components/molecules/InfoDisplay'

const S = {}
S.Path = styled.div`
  background: ${Layout.DARK};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 0;
  margin: 0;

  & > picture {
    display: flex;
    height: 33vh;
    min-height: 180px;
    width: 100vw;
  }
  & > picture > img {
    width: 100vw;
    object-fit: cover;
    object-position: center right;
  }

  .MuiList-root {
    background: rgba(80, 80, 80, 0);
  }

  #nested-list-subheader {
    color: white;
    font-size: 0.75rem;
  }
`

class ResumeMobileContainer extends Component {
  componentDidMount() {
    this.props.loadResume()
  }

  render() {
    const {
      path,
      keystone,
      selectResumeKeystone,
      t1,
      selectResumeTier1,
      t2,
      selectResumeTier2,
      t3,
      selectResumeTier3,
      toggleResumeMenu,
      open,
      bgImage,
      runeInfo,
      toggleResumeInfo,
    } = this.props

    function closeInfoDisplay() {
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
      toggleResumeInfo()
    }

    function openInfoDisplay(rune) {
      const scrollY = document.documentElement.style.getPropertyValue('--scroll-y')
      const body = document.body
      body.style.position = 'fixed'
      body.style.top = `-${scrollY}`
      toggleResumeInfo(rune)
    }

    function lockInInfoDisplay(_, tier, id) {
      switch (tier) {
        case 0: // keystone
          selectResumeKeystone(id)
          break
        case 1: // tier 1
          selectResumeTier1(id)
          break
        case 2: // tier 2
          selectResumeTier2(id)
          break
        case 3: // tier 3
          selectResumeTier3(id)
          break
        default:
          break
      }
      closeInfoDisplay()
    }

    window.addEventListener('scroll', () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`)
    })

    return (
      <S.Path>
        <InfoDisplay
          open={runeInfo || false}
          onClose={closeInfoDisplay}
          onPick={lockInInfoDisplay}
          runeInfo={runeInfo}
        />
        <picture>
          <source srcSet={this.props.bgChrome} type="image/webp" />
          <source srcSet={this.props.bgSafari} type="image/jpeg" />
          <img src={bgImage} alt="loading..." />
        </picture>

        <List component="nav" aria-label="primary tree">
          <Drawer
            open={open.FLAVOR}
            onToggle={() => console.log()}
            onSelect={(id) => console.log(id)}
            runes={[path]}
            selected={path}
            isFlavor
            color={path && path.colorRGB}
          />
          <Drawer
            open={open.KEYSTONE}
            onToggle={() => toggleResumeMenu({ tier: 'KEYSTONE' })}
            onSelect={selectResumeKeystone}
            runes={path && path.keystones}
            selected={keystone}
            flavor={path}
            color={path && path.colorRGB}
            keystone
            moreInfo={(runeInfo) => openInfoDisplay({ ...runeInfo, tier: 0 })}
          />
          <Drawer
            open={open.T1}
            onToggle={() => toggleResumeMenu({ tier: 'T1' })}
            onSelect={selectResumeTier1}
            runes={path && path.tier1}
            selected={t1}
            flavor={path}
            color={path && path.colorRGB}
            tier={1}
            moreInfo={(runeInfo) => openInfoDisplay({ ...runeInfo, tier: 1 })}
          />
          <Drawer
            open={open.T2}
            onToggle={() => toggleResumeMenu({ tier: 'T2' })}
            onSelect={selectResumeTier2}
            runes={path && path.tier2}
            selected={t2}
            flavor={path}
            color={path && path.colorRGB}
            tier={2}
            moreInfo={(runeInfo) => openInfoDisplay({ ...runeInfo, tier: 2 })}
          />
          <Drawer
            open={open.T3}
            onToggle={() => toggleResumeMenu({ tier: 'T3' })}
            onSelect={selectResumeTier3}
            runes={path && path.tier3}
            selected={t3}
            flavor={path}
            color={path && path.colorRGB}
            tier={3}
            moreInfo={(runeInfo) => openInfoDisplay({ ...runeInfo, tier: 3 })}
          />
        </List>
      </S.Path>
    )
  }
}

const mapStateToProps = (state) => {
  var path = state.resume.path
  if (path) {
    var keystone = path.keystones[state.resume.keystone]
    var t1 = path.tier1[state.resume.t1]
    var t2 = path.tier2[state.resume.t2]
    var t3 = path.tier3[state.resume.t3]

    var bgImage = path.bgMobile
    var bgChrome = path.bgMobileChrome
    var bgSafari = path.bgMobileSafari
  }
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
    bgImage: bgImage || null,
    bgChrome: bgChrome || null,
    bgSafari: bgSafari || null,
    runeInfo: state.resume.runeInfo,
  }
}

const mapDispatchToProps = {
  selectResumeKeystone,
  selectResumeTier1,
  selectResumeTier2,
  selectResumeTier3,
  toggleResumeMenu,
  toggleResumeInfo,
  loadResume,
}

export default connect(mapStateToProps, mapDispatchToProps)(ResumeMobileContainer)
