import React from 'react'
import styled from '@emotion/styled'
const S = {}
S.FilledButton = styled.div`
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};

  border-radius: 4px;
  min-height: 36px;
  min-width: 164px;
  padding: 8px;
  margin: 16px 16px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    outline-color: ${(props) => props.color};
    outline-width: 6px;
  }

  &:active {
    color: ${(props) => props.bg};
    background-color: ${(props) => props.color};
  }
`

function FilledButton({ color, bg, label, onClick }) {
  return (
    <S.FilledButton color={color} bg={bg} onClick={onClick}>
      {label}
    </S.FilledButton>
  )
}

export default FilledButton
