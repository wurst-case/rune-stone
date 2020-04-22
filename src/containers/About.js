import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import Layout from '../constants/layoutConstants'
import brianHeadshot from '../assets/avatar.png'
import dylanHeadshot from '../assets/avatar.png'
import jamieHeadshot from '../assets/avatar.png'

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
`

S.Team = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
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
        <h1>About Us</h1>
        <S.Team>
          <S.TeamMember>
            <img src={brianHeadshot} alt="headshot" />
            <h3>Brian Bookman</h3>
            <h5>Game Developer</h5>
          </S.TeamMember>
          <S.TeamMember>
            <img src={dylanHeadshot} alt="headshot" />
            <h3>Dylan Modell</h3>
            <h5>Software Engineer</h5>
          </S.TeamMember>
          <S.TeamMember>
            <img src={jamieHeadshot} alt="headshot" />
            <h3>Jamie</h3>
            <h5>Art Director</h5>
          </S.TeamMember>
        </S.Team>
      </S.Container>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ComingSoon)
