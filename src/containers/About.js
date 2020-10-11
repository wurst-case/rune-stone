/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import Layout from '../constants/layoutConstants'
import { Link } from 'react-router-dom'

const S = {}
S.Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Layout.DARK};
  color: rgba(${Layout.GOLD}, 1);
  padding: 16px;
  box-sizing: border-box;
  text-align: center;
  h3 {
    /* margin-top: 0; */
  }

  h4 {
    margin-top: 16px;
    margin-bottom: 4px;
  }

  h5 {
    margin: 2px 0;
  }

  a {
    color: white;
    cursor: pointer;
    text-decoration: underline;
    margin-bottom: 36px;
    margin-top: 36px;
    font-size: 1.5rem;
  }

  a::hover {
    color: rgba(${Layout.GOLD}, 1);
  }

  .noSelect {
    pointer-events: none;
  }
`

S.Team = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`

S.TeamMember = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 200px;

  h4 {
    margin-bottom: 0;
  }

  h5 {
    margin: 0;
  }

  img {
    width: 180px;
  }
`

export class ComingSoon extends Component {
  render() {
    return (
      <S.Container>
        <Link to="/learnmore">Learn More About the Bandle Path</Link>
        <h3>•</h3>
        <h3>Our Team</h3>
        <h4>Brian H. Bookman</h4>
        <h5>Creative Director</h5>
        <h4>Dylan Cortez-Modell</h4>
        <h5>Software Engineer</h5>
        <h4>James Ellis</h4>
        <h5>Art Director</h5>
        <h3>•</h3>
        <h3>Special Thanks To</h3>
        <div className="noSelect">
          <h4>Alina Quiñones</h4>
          <h4>Brittney Hoglund</h4>
          <h4>Collin Hertz</h4>
          <h4>Drew Mars</h4>
          <h4>Jurriaan Brugge</h4>
          <h4>Max ‘babij’ Babigian</h4>
          <h4>Max Hertz</h4>
          <h4>Paul Dirac</h4>
          <h4>PJ Onusconich</h4>
          <h4>Riley Sweeney Lynch</h4>
          <h4>Shane McDonald</h4>
          <h4>Stern</h4>
        </div>
        <h3>•</h3>
      </S.Container>
    )
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ComingSoon)
