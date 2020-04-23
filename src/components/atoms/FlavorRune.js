import React from 'react'
import styled from '@emotion/styled'
import Layout from '../../constants/layoutConstants'

const S = {}
S.FlavorRune = styled.div`
  width: ${Layout.RUNE_SIZE_FLAVOR + 20}px;
  height: ${Layout.RUNE_SIZE_FLAVOR + 20}px;

  border-radius: 100%;
  background-color: transparent;
  margin-bottom: 7px;
  cursor: pointer;
  position: relative;

  & > img {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 40px;
  }
`

function FlavorRune({ color, onClick, icon }) {
  return (
    <S.FlavorRune color={color} onClick={(_) => onClick()}>
      <img src={icon} alt="path icon" />
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 61 60.55">
        <defs>
          <linearGradient
            id={'linear-gradient'}
            x1="33.67"
            y1="0.96"
            x2="33.67"
            y2="55.53"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor={'rgba(' + color + ',1)'} />
            <stop offset="0.75" stopColor={'rgba(' + color + ',1)'} stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id={'linear-gradient-2'}
            x1="-22.07"
            y1="-94.81"
            x2="-22.07"
            y2="-40.24"
            gradientTransform="matrix(-0.5, 0.87, -0.87, -0.5, -40.03, 18.36)"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id={'linear-gradient-3'}
            x1="-108.15"
            y1="8.18"
            x2="-108.15"
            y2="62.75"
            gradientTransform="translate(-57.09 -48.81) rotate(-120)"
            xlinkHref="#linear-gradient"
          />
        </defs>
        <path
          style={{ fill: 'url(#linear-gradient)' }}
          d="M33.67.49A27.33,27.33,0,1,0,61,27.81,27.33,27.33,0,0,0,33.67.49Zm0,52.61A25.29,25.29,0,1,1,59,27.81,25.29,25.29,0,0,1,33.67,53.1Z"
        />
        <path
          style={{ fill: 'url(#linear-gradient-2)' }}
          d="M53.52,46.88a27.33,27.33,0,1,0-37.33,10A27.32,27.32,0,0,0,53.52,46.88ZM8,20.57a25.28,25.28,0,1,1,9.25,34.55A25.29,25.29,0,0,1,8,20.57Z"
        />
        <path
          style={{ fill: 'url(#linear-gradient-3)' }}
          d="M3.67,41a27.32,27.32,0,1,0,10-37.32A27.32,27.32,0,0,0,3.67,41Zm45.56-26.3A25.29,25.29,0,1,1,14.69,5.43,25.28,25.28,0,0,1,49.23,14.69Z"
        />
      </svg>
    </S.FlavorRune>
  )
}

export default FlavorRune
