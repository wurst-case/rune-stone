import React from 'react'
import styled from '@emotion/styled'

const S = {}
S.OutlinedButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  color: ${(props) => props.color};
  border: solid 2px ${(props) => props.color};
  border-radius: 4px;

  border-radius: 4px;
  min-height: 36px;
  min-width: 164px;
  padding: 8px;
  margin: 16px 16px;
  box-sizing: border-box;

  cursor: pointer;

  &:hover {
    color: white;
    border-color: white;
    outline-color: ${(props) => props.color};
    outline-width: 6px;
  }

  &:active {
    color: white;
    background-color: ${(props) => props.color};
  }
`

function OutlinedButton({ color, label, onClick }) {
  return (
    <S.OutlinedButton color={color} onClick={onClick}>
      {label}
    </S.OutlinedButton>
  )
}

export default OutlinedButton
