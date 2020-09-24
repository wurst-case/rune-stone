import React, { Component } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import Layout from '../../constants/layoutConstants'
import Logo from '../../assets/logo.png'
import { makePermalink, reset } from '../../actions/composition'
import InfoIcon from '@material-ui/icons/Info'
import ShareIcon from '@material-ui/icons/Share'
import RotateLeftIcon from '@material-ui/icons/RotateLeft'
import CreateIcon from '@material-ui/icons/Create'
import DomainIcon from '@material-ui/icons/Domain'
import BetaBanner from '../../assets/betabanner.png'

const S = {}
S.Header = styled.div`
  img.banner {
    width: 120px;
    position: fixed;
    top: 15px;
    left: -35px;
    z-index: 1000;
    transform: rotate(-45deg);
  }
  & > div {
    position: fixed;
    background-color: ${Layout.DARK};
    /* padding: 16px; */
    color: rgba(${Layout.GOLD}, 1);
    text-align: center;
    width: 64px;
    height: 100vh;
    box-sizing: border-box;
    border: solid 1px ${Layout.BRONZE};
    z-index: 100;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: width 100ms;
  }

  a,
  h5 {
    color: transparent;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: rgba(${Layout.GOLD}, 1);
    text-decoration: none;
    font-family: 'Beaufort W01 Bold1339640';
    cursor: pointer;
    font-size: 1rem;
    display: none;
    margin: 0;
    margin-left: 16px;
  }

  .logo {
    width: 80%;
    cursor: pointer;
    margin: 0;
    margin-bottom: 54px;
    margin-top: 20px;
  }

  input#permalinkHiddenInput {
    position: 'absolute';
    left: '-1000px';
    top: '-1000px';
    opacity: 0;
    max-width: 1px;
    color: transparent;
    background-color: transparent;
    z-index: -100000;
    padding: 0;
  }

  @media only screen and (min-width: 1100px) {
    & > div:hover {
      width: 128px;
      transition: width 100ms;
      h5 {
        display: inline;
      }
    }
  }

  @media only screen and (max-width: 1100px) {
    width: 100vw;
    height: 60px;

    & > div {
      flex-direction: row;
      justify-content: space-evenly;
      width: 100vw;
      height: 60px;
      box-shadow: 0 5px 6px rgba(0, 0, 0, 0.5);
      padding: 16px 8px;
    }

    .logo {
      fill: rgba(${Layout.GOLD}, 1);
      height: 100%;
      width: auto;
      margin: 0 56px;
    }
  }
`

S.NavButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  width: 100%;
  padding: 32px 0 32px 1vw;
  background-color: rgba(255, 255, 255, 0);
  transition: background-color 100ms;
  box-sizing: border-box;

  @media only screen and (min-width: 1100px) {
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      transition: background-color 100ms;
    }
  }
`

function WrappedLogo() {
  var history = useHistory()
  function handleClick() {
    history.push('/')
  }

  return <img className="logo" onClick={handleClick} src={Logo} alt="logo" />
}

function AboutButton() {
  var history = useHistory()
  function handleClick() {
    history.push('/about')
  }

  return (
    <S.NavButton onClick={handleClick}>
      <DomainIcon />
      <h5>About</h5>
    </S.NavButton>
  )
}
function CreateButton() {
  var history = useHistory()
  function handleClick() {
    history.push('/ecs')
  }

  return (
    <S.NavButton onClick={handleClick}>
      <CreateIcon />
      <h5>Create</h5>
    </S.NavButton>
  )
}
function BandleButton() {
  var history = useHistory()
  function handleClick() {
    history.push('/resume')
  }

  return (
    <S.NavButton onClick={handleClick}>
      <InfoIcon />
      <h5>Resumé</h5>
    </S.NavButton>
  )
}
function ShareButton({ shareCallback }) {
  return (
    <S.NavButton onClick={shareCallback}>
      <ShareIcon />
      <h5>Share</h5>
    </S.NavButton>
  )
}
function ResetButton({ resetCallback }) {
  var history = useHistory()
  function handleClick() {
    resetCallback()
    history.push('/')
  }

  return (
    <S.NavButton onClick={handleClick}>
      <RotateLeftIcon />
      <h5>Reset</h5>
    </S.NavButton>
  )
}

export class Header extends Component {
  componentDidUpdate() {
    // Component only updates when input changes and when share btn is clicked
    var copyText = document.getElementById('permalinkHiddenInput')
    copyText.select()
    copyText.setSelectionRange(0, 99999)
    document.execCommand('copy')
    alert('Copied the link: www.rune-stone.com/comp/' + this.props.pathID)
  }

  render() {
    return (
      <S.Header>
        <img src={BetaBanner} alt="Beta" className="banner" />
        <div>
          <WrappedLogo />
          <ShareButton
            shareCallback={() => {
              this.forceUpdate()
              this.props.makePermalink()
            }}
          />
          <ResetButton resetCallback={this.props.reset} />
          <CreateButton />
          <AboutButton />
          {/* <BandleButton /> */}

          <input
            type="text"
            value={this.props.pathID ? 'www.rune-stone.com/comp/' + this.props.pathID : ''}
            id="permalinkHiddenInput"
            readOnly
          />
        </div>
      </S.Header>
    )
  }
}

const mapStateToProps = (state) => ({
  pathID: state.composition.pathID,
})

const mapDispatchToProps = (dispatch) => ({
  makePermalink: () => dispatch(makePermalink()),
  reset: () => dispatch(reset()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
