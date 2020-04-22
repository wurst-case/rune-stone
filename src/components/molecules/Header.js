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

  &>div{  position: fixed;
  
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
  justify-content: space-evenly;
  align-items: center;}


  h1,
  h4 {
    /* background-color: rgba(${Layout.GOLD}, 1); */
    color: transparent;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
  }

  h1,
  h4 {
    margin: 0;
    margin-top: 8px;
  }

  .logo  {
    fill: rgba(${Layout.GOLD}, 1);
    max-height: 60px;
    cursor: pointer;
  }

  h5, a {
    color: rgba(${Layout.GOLD}, 1);
    text-decoration: none;
    font-family: 'Beaufort W01 Bold1339640';
    cursor: pointer;
    font-size: 1rem;
  }

  @media only screen and (max-width: 600px) {
    width: 100vw;
    height: 60px;

    &>div{
      flex-direction: row;
      width: 100vw;
      height: 60px;
      box-shadow: 0 5px 6px rgba(0, 0, 0, 0.5);
      padding: 16px 8px;
    }

    .logo  {
    fill: rgba(${Layout.GOLD}, 1);
    height: 100%;
    }
  }
`

function WrappedLogo() {
  var history = useHistory()
  function handleClick() {
    // console.log(history)
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
