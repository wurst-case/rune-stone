import React, { Component } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import Layout from '../../constants/layoutConstants'
import { ReactComponent as Logo } from '../../assets/runestonelogo.svg'
import { makePermalink, reset } from '../../actions/composition'

const S = {}
S.Header = styled.div`
  min-width: 10vw;
  height: 100%;

  & > div {
    position: fixed;

    background-color: ${Layout.DARK};
    padding: 16px;
    color: rgba(${Layout.GOLD}, 1);
    text-align: center;
    width: 10vw;
    height: 100vh;
    box-sizing: border-box;
    border: solid 1px ${Layout.BRONZE};
    z-index: 100;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  }

  .logo,
  a,
  h5 {
    margin: 54px 0;
  }

  .logo {
    fill: rgba(${Layout.GOLD}, 1);
    min-height: 60px;
    max-height: 60px;
    cursor: pointer;
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
    }
  }
`

function WrappedLogo() {
  var history = useHistory()
  function handleClick() {
    history.push('/')
  }

  return <Logo className="logo" onClick={handleClick} />
}

export class Header extends Component {
  render() {
    return (
      <S.Header>
        <div>
          <WrappedLogo />
          <h5 onClick={() => this.props.makePermalink()}>Share</h5>
          <h5 onClick={() => this.props.reset()}>Reset</h5>
          {/* <Link to="/">Reset</Link> */}
          <Link to="/ecs">Create</Link>
          <Link to="/about">About</Link>
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
