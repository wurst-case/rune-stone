import React from 'react'
import styled from '@emotion/styled'
import AddCircleIcon from '@material-ui/icons/AddCircle'

const S = {}
S.AddButton = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
  height: 36px;

  span {
    font-size: 0.75rem;
  }

  &:hover {
    .MuiSvgIcon-fontSizeLarge,
    span {
      fill: ${(props) => props.color};
      color: ${(props) => props.color};
    }
  }
`

function AddRune({ onAdd, keystone, color }) {
  return (
    <S.AddButton onClick={onAdd} color={color}>
      <AddCircleIcon id="icon" fontSize="large" />
      <span>{'Add a ' + (keystone ? 'Keystone' : 'Rune')}</span>
    </S.AddButton>
  )
}

export default AddRune
